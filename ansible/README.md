# ansible

Víceméně automatický setup serveru.  
Je nutné vytvořit klíč a přidat ho do GH jako deploy key, jinak nebude fungovat clone.

Instalace ansible rolí a kolekcí:

```sh
ansible-galaxy collection install community.general
ansible-galaxy role install matic-insurance.mongodb_container
```

`hosts` soubor ve formátu:

```txt
[main]
databazepomucek.svkul.cz MONGODB=mongodb://localhost/ujep PORT=3001 PUBLIC_RSA_KEY= PRIVATE_RSA_KEY= CERT_KEY=
```

hodnoty PUBLIC_RSA_KEY a PRIVATE_RSA_KEY lze vygenerovat scriptem `node server/bin/generateKeys.js`.
