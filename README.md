# scalable-login-web
Web client para o projeto scalable-login. Possui apenas conteúdo estático então poderia rodar no S3 ou em uma CDN por exemplo.

**Melhorias**

- Externalizar informação do endpoint em que API REST está (no momento está no arquivo global.js) 
- Passar informação de login no header (https://en.wikipedia.org/wiki/Basic_access_authentication)
- Minificar e unir em um arquivo (aplicar para css e js)
- Utilizar i18n
