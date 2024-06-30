# Flowchain

## Setup

- Skapa backend/config/config.env och lägg in info:

```
PORT=5001
MINE_RATE=100
DIFFICULTY=1

PUB_KEY=
SUB_KEY=
SECRET_KEY=

JWT_SECRET=
JWT_TTL=90d
JWT_COOKIE_TTL=90

MONGO_URI=
```

- Terminal:
  ./backend $npm run i
  ./backend $npm run dev
  ./frontend $npm run i
  ./frontend $npm run dev

## Tests

- Terminal:
  ./backend $npm run test

## Instruktioner för inlämning:

I denna sista inlämningsuppgift ska ni skapa en fullständig blockkedja för en egen kryptovaluta med transaktionshantering och validering av transaktionerna.

Ni ska använda er av en transaktionspool för att hantera transaktioner innan de placeras i ett block.

När ett block skapas för transaktionerna ska även en ”belöningstransaktion” skapas och spåras i transaktionspoolen.
Transaktionerna måste valideras så att de följer de regler som vi gått igenom under lektionerna.

Nätverk

Det ska gå att starta upp flera noder med blockkedjan. Synkronisering av blockkedjan ska ske vid uppstart av en ny nod, vid addering av transaktioner samt när ett block skapas.

Teknologin för nätverkskommunikationska vara antingen Redis, Pubnu beller Websockets.

Blockkedjan, block samt transaktioner ska sparas ner i en mongodb databas.
(Även om detta i princip inte är nödvändigt i en verklig blockkedja).

SäkerhetFör att kunna nyttja en blockkedja som konsument måste man vara registrerad och inloggad. Här ska ni använda Json Web Token(JWT) som teknologi för att validera att en användare är inloggad och tillhöra korrekt roll för att kunna skapa en ny transaktion och att kunna lista sina egna transaktioner samt block.

- Användare ska lagras i ett mongodb dokument.

Klient

- En klient ska utvecklas i antingen React med Vite eller en renodlad JavaScript applikation med HTML och CSS.

- Klient applikationen ska kunna skapa nya transaktioner, lista transaktioner och lista block.

- Dessutom ska det gå att skapa ett block med transaktioner, dvs ”mine” av block.

Godkänt krav (G)
Allt ovanstående måste vara på plats för betyget G.

Välgodkänt(VG)
För VG ska TDD användas för transaktionshanteringen.

Alla ”Best practices”som vi gått igenom under kursens gång ska användas.

Det vill säga Clean Code, SOC, MVC.

Dessutom ska servern vara säker mot olika typerav angrepp, till exempel NoSqlinjections, DDOS samt XSS-försök.
