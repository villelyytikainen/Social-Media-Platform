# Social Media Platform Design Document

## 1. Introduction
### 1.1 Purpose

This document outlines the design for a social media platform where users can register, create posts, share images, and interact with other users.

### 1.2 Scope

The platform aims to provide a user-friendly, secure, and engaging social networking experience for users across various devices.

## 2. System Architecture
The application follows a three-tier architecture:

1. User Interface (Frontend): React.js
2. Application Logic (Backend): Node.js with Express.js
3. Database: MySQL

## 3. Detailed Design

### 3.1 Frontend

#### 3.1.1 User Interface Components
- **Navbar**
  - Expand/collapse functionality
  - Links to: Home, Profile, Messages, Friends, Settings
  - Logout option

- **Home**
  - Display friends' posts

- **Profile**
  - User information (Name, Profile picture, Bio, Location, @username)
  - User's posts

- **Messages**
  - Search functionality
  - Message selection (for deletion)
  - Send message feature
  - Message list with expansion option

- **Friends**
  - Friend search
  - Friend selection (for removal)
  - Add friend feature
  - Friends list

- **Settings**
  - Account settings (Change username, Change password, Delete account)
  - Appearance settings

- **Chat**
  - Recipient name with profile link
  - Window controls (Minimize, Expand, Close)

- **Notifications**
  - Likes
  - Friend requests
  - Received messages

## 3.1.2 State Management

- Implement Redux for global state management
- Use React hooks (useState, useEffect) for component-level state
- Implement real-time updates using WebSockets for notifications and messages

#### 3.1.3 Routing
Implemented using React Router:
- /
- /profile
- /messages
- /friends
- /settings
- /logout

#### 3.1.4 Data Fetching

- Use Axios for HTTP requests
- Implement request interceptors for adding authentication tokens
- Use React Query for efficient data fetching, caching, and state management

### 3.2 Backend

#### 3.2.1 API Endpoints
- Users
  - GET /api/users
  - GET /api/users/:id
  - POST /api/users
  - PUT /api/users/:id
  - DELETE /api/users/:id

- Messages
  - GET /api/messages
  - GET /api/messages/:id
  - POST /api/messages/:recipient_user_id
  - PUT /api/messages/:id
  - DELETE /api/messages/:id

- Posts
  - GET /api/posts
  - GET /api/posts/:id
  - POST /api/posts
  - PUT /api/posts/:id
  - DELETE /api/posts/:id

- Comments
  - GET /api/comments
  - GET /api/comments/:id
  - POST /api/comments
  - PUT /api/comments/:id
  - DELETE /api/comments/:id

- Notifications
  - GET /api/notifications
  - GET /api/notifications/:id
  - POST /api/notifications
  - DELETE /api/notifications/:id

- Likes
  - GET /api/likes
  - GET /api/likes/:id
  - POST /api/likes
  - DELETE /api/likes/:id

#### 3.2.2 Middleware

- Bcrypt (for password hashing)
- Mongoose (for MongoDB object modeling)
- JSON Web Token (for authentication)

#### 3.2.3 Data Models and Database Schema

1. dbo.user_profile
    - id: Integer (Primary Key)
    - username: NVARCHAR(50) (Unique)
    - password: NVARCHAR(255) (hashed)
    - profile_picture: NVARCHAR(255) (URL)
    - bio: TEXT
    - settings: NVARCHAR(MAX)
    - role: NVARCHAR(20) CHECK (role IN ('user', 'moderator', 'admin'))
    - created: TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    - updated: TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

2. dbo.user_post
    - id: Integer (Primary Key)
    - profile_id: Integer (Foreign Key referencing dbo.user_profile.id)
    - title: VARCHAR(255)
    - content: TEXT
    - media_urls: JSON (Array of URLs)
    - visibility: VARCHAR(20) CHECK (visibility IN ('public', 'friends', 'private'))
    - location: GEOGRAPHY (for spatial data)
    - created_at: TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    - updated_at: TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

3. dbo.user_message
    - id: Integer (Primary Key)
    - sender_id: Integer (Foreign Key referencing dbo.user_profile.id)
    - receiver_id: Integer (Foreign Key referencing dbo.user_profile.id)
    - content: TEXT
    - read_status: BOOLEAN DEFAULT FALSE
    - is_deleted: BOOLEAN DEFAULT FALSE
    - created_at: TIMESTAMP DEFAULT CURRENT_TIMESTAMP

4. dbo.post_comment
    - id: Integer (Primary Key)
    - profile_id: Integer (Foreign Key referencing dbo.user_profile.id)
    - post_id: Integer (Foreign Key referencing dbo.user_post.id)
    - content: TEXT
    - is_edited: BOOLEAN DEFAULT FALSE
    - created_at: TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    - updated_at: TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

5. dbo.user_notification
    - id: Integer (Primary Key)
    - profile_id: Integer (Foreign Key referencing dbo.user_profile.id)
    - content: TEXT
    - type: VARCHAR(50) CHECK (type IN ('like', 'comment', 'friend_request', 'message'))
    - related_user_id: Integer (Foreign Key referencing dbo.user_profile.id)
    - related_post_id: Integer (Foreign Key referencing dbo.user_post.id, nullable)
    - read: BOOLEAN DEFAULT FALSE
    - created_at: TIMESTAMP DEFAULT CURRENT_TIMESTAMP

6. dbo.post_like
    - id: Integer (Primary Key)
    - post_id: Integer (Foreign Key referencing dbo.user_post.id)
    - profile_id: Integer (Foreign Key referencing dbo.user_profile.id)
    - created_at: TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    - UNIQUE (post_id, profile_id)

7. dbo.friendship
    - id: Integer (Primary Key)
    - requester_id: Integer (Foreign Key referencing dbo.user_profile.id)
    - recipient_id: Integer (Foreign Key referencing dbo.user_profile.id)
    - status: VARCHAR(20) CHECK (status IN ('pending', 'accepted', 'rejected'))
    - created_at: TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    - updated_at: TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    - UNIQUE (requester_id, recipient_id)

8. dbo.user_session
    - id: Integer (Primary Key)
    - user_id: Integer (Foreign Key referencing dbo.user_profile.id)
    - session_token: VARCHAR(255) UNIQUE
    - expiry_date: TIMESTAMP
    - created_at: TIMESTAMP DEFAULT CURRENT_TIMESTAMP

9. dbo.user_activity
    - id: Integer (Primary Key)
    - user_id: Integer (Foreign Key referencing dbo.user_profile.id)
    - activity_type: VARCHAR(50) CHECK (activity_type IN ('login', 'post', 'comment', 'like', 'friend_request'))
    - details: JSON
    - created_at: TIMESTAMP DEFAULT CURRENT_TIMESTAMP

### 3.3 User Interface Design
(Wireframes to be inserted here)

## 4. Security
- Passwords are salted and hashed using bcrypt before storage in the database
- Implement JWT for stateless authentication
- Use HTTPS for all communications
- Implement rate limiting to prevent brute-force attacks
- Sanitize user inputs to prevent XSS attacks
- Use parameterized queries to prevent SQL injection
- Implement CSRF protection

## 5. Error Handling

- Frontend error handling:
    - Implement global error boundary in React
    - Display user-friendly error messages
- Backend error handling:
    - Use try-catch blocks for async operations
    - Implement custom error classes
- Logging:
    - Use Winston for logging on the server-side
    - Implement client-side error logging and reporting

## 6. Performance Considerations

- Implement lazy loading for images and components
- Use server-side rendering for initial page load
- Implement infinite scrolling for post feeds
- Use CDN for static assets
- Implement database indexing for frequently queried fields
- Use caching mechanisms (e.g., Redis) for frequently accessed data

## 7. Scalability

- Design the system to be horizontally scalable
- Implement database sharding for handling large amounts of data
- Use load balancers to distribute traffic across multiple servers
- Implement a microservices architecture for better scalability of individual components

## 8. Testing Strategy

- Unit Testing: Use Jest for both frontend and backend unit tests
- Integration Testing: Use Supertest for API endpoint testing
- End-to-End Testing: Implement Cypress for frontend E2E tests
- Performance Testing: Use Apache JMeter for load testing
- Security Testing: Regular penetration testing and vulnerability assessments

## 9. Deployment
(To be detailed based on specific requirements)

## 10. Maintenance and Support
(To be detailed based on specific requirements)

## 11. Appendix
- Glossary of terms
- References
- Version history