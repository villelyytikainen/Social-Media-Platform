# Kuvaus
Projektin ideana on toteuttaa sosiaalinen media jossa käyttäjän täytyy rekisteröityä palveluun ja on sitten mahdollisuus lisätä omia postauksia, kuvia ja keskustella muiden käyttäjien kanssa.
# Arkkitehtuuri
Sovellus koostuu kolmesta kerroksesta:
- Käyttöliittymä (Frontend)
- Sovelluslogiikka (Backend)
- Tietokanta.
# Yksityiskohtainen suunnitelma
## Frontend
### Käyttöliittymäkomponentit
- **Navbar**
	- Pienennä / laajenna navbar
	- Lista linkeistä eri sivuille
		- Home
		- Profile
		- Messages
		- Friends
		- Settings
	- Log Out
- **Home**
	- Ystävien postaukset
- **Profile**
	- Omat tiedot
		- Nimi
		- Profiilikuva
		- Esittelyteksti
		- Asuinpaikka
		- Profiili linkki *@username*
	- Omat postaukset
- **Messages**
	- Haku viesteistä
	- Valitse viesti(t)
		- Poista viesti(t)
	- Lähetä viesti
	- Viestit
		- Laajennus nappi **
		- Linkki koko viestiketjuun
- **Friends**
	- Haku ystävistä
	- Valitse ystävä(t)
		- Poista ystävä(t)
	- Lisää ystävä
	- Ystävät
		-
- **Settings**
	- Tilin asetukset
		- Vaihda käyttäjätunnus
		- Vaihda salasana
		- Poista tili
	- Ulkoasu **
	-
- **Chat**
	- Vastaanottajan nimi /w linkki profiiliin
	- Ikkunan pienennys _
	- Ikkunan laajennus **
	- Ikkunan sulkeminen
- **Notifications**
	- Tykkäykset
	- Kaverikutsut
	- Vastaanotetut viestit
### Tilan hallinta
- Navigaation tila muuttuu käyttäjän interaktiosta.
- Home-sivun tila muuttuu jos käyttäjä tai käyttäjän ystävä lisää päivityksen.
### Reititys
Applikaation reititys tapahtuu React routeria käyttäen.
- /
- /profile
- /messages
- /friends
- /settings
### Tietojen hakeminen

## Backend
### API-päätteet
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
	- DELETE /api/liked/:id
### Middlewaret
- Bcrypt
- Mongoose
### Tietomallit ja tietokantaskeema
<table>
	<tr>
	<th><h5>user_profile</h5></th>
	</tr>
	<tr>
	<td>id</td>
	<td>int</td>
	<td>PK</td>
	</tr>
	<tr>
	<td>username</td>
	<td>string</td>
	</tr>
	<tr>
	<td>password</td>
	<td>string</td>
	</tr>
	<tr>
	<td>friends</td>
	<td>int array</td>
	</tr>
	<tr>
	<td>settings</td>
	<td>object</td>
	</tr>
	<tr>
	<td>created_at</td>
	<td>date</td>
	</tr>
	<tr>
	<td>updated_at</td>
	<td>date</td>
	</tr>

	<tr>
	<th><h5>user_post</h5></th>
	</tr>
	<tr>
	<td>id</td>
	<td>int</td>
	<td>PK</td>
	</tr>
	<tr>
	<td>profile_id</td>
	<td>int</td>
	<td>FK</td>
	</tr>
	<tr>
	<td>title</td>
	<td>string</td>
	</tr>
	<tr>
	<td>written_text</td>
	<td>string</td>
	</tr>
	<tr>
	<td>likes</td>
	<td>int</td>
	</tr>
	<tr>
	<td>created_at</td>
	<td>date</td>
	</tr>
	<tr>
	<td>updated_at</td>
	<td>date</td>
	</tr>

	<tr>
	<th><h5>user_message</h5></th>
	</tr>
	<tr>
	<td>id</td>
	<td>int</td>
	<td>PK</td>
	</tr>
	<tr>
	<td>profile_id</td>
	<td>int</td>
	<td>FK</td>
	</tr>
	<tr>
	<td>receiver_id</td>
	<td>int</td>
	<td>FK</td>
	</tr>
	<tr>
	<td>written_text</td>
	<td>string</td>
	</tr>
	<tr>
	<td>read_status</td>
	<td>bool</td>
	</tr>
	<tr>
	<td>created_at</td>
	<td>date</td>
	</tr>

	<tr>
	<th><h5>post_comment</h5></th>
	</tr>
	<tr>
	<td>id</td>
	<td>int</td>
	<td>PK</td>
	</tr>
	<tr>
	<td>profile_id</td>
	<td>int</td>
	<td>FK</td>
	</tr>
	<tr>
	<td>written_text</td>
	<td>string</td>
	</tr>
	<tr>
	<td>post_id</td>
	<td>int</td>
	<td>FK</td>
	</tr>
	<tr>
	<td>created_at</td>
	<td>date</td>
	</tr>
	<tr>
	<td>updated_at</td>
	<td>date</td>
	</tr>

<tr>
	<th><h5>user_notification</h5></th>
	</tr>
	<tr>
	<td>id</td>
	<td>int</td>
	<td>PK</td>
	</tr>
	<tr>
	<td>profile_id</td>
	<td>int</td>
	<td>FK</td>
	</tr>
	<tr>
	<td>content</td>
	<td>string</td>
	</tr>
	<tr>
	<td>type</td>
	<td>string</td>
	</tr>
	<tr>
	<td>read</td>
	<td>bool</td>
	</tr>
	<tr>
	<td>created_at</td>
	<td>date</td>
	</tr>

<tr>
	<th><h5>post_like</h5></th>
	</tr>
	<tr>
	<td>id</td>
	<td>int</td>
	<td>PK</td>
	</tr>
	<tr>
	<td>post_id</td>
	<td>int</td>
	<td>FK</td>
	</tr>
	<tr>
	<td>profile_id</td>
	<td>int</td>
	<td>FK</td>
	</tr>
	<tr>
	<td>created_at</td>
	<td>date</td>
	</tr>
</table>

![[Pasted image 20240404132802.png]]
## Käyttöliittymä
### Wireframe
![[Pasted image 20240324114804.png]]
![[Pasted image 20240324114905.png]]
![[Pasted image 20240324114916.png]]
![[Pasted image 20240324114928.png]]
![[Pasted image 20240324114958.png]]
![[Pasted image 20240324115203.png]]
![[Pasted image 20240324115022.png]]


## Turvallisuus
Salasanat saltataan ja kryptataan ennen tallennusta tietokantaan.
## Virheenkäsittely
- Frontend-virheiden käsittely
- Backend-virheiden käsittely
- Lokitus