# Setup


#### Composer symlink (development)

After placing it in the `plugins` folder you can now link it to composer by running this command in the root
directory:

```shell
cd [magento2 root folder]
mkdir -p plugins
cd plugins
git clone git@gitlab.com:apite/shopgate/magento2/shopgate-webcheckout.git
cd ../

# create sym-linking from plugins folder
composer config repositories.sym '{"type": "path", "url": "plugins/*", "options": {"symlink": true}}'
composer require shopgate/webcheckout-magento2:*
bin/magento module:e Shopgate_WebCheckout
bin/magento setup:upgrade

bin/magento config:set shopgate_webcheckout/development/enable_logging 1
bin/magento cache:flush
```

### Run Postman tests

```shell
cd plugins/shopgate-webcheckout/tests
npm i
npm run local
```

### Developer nice to have
```shell
bin/magento config:set webapi/jwtauth/admin_expiration 9999
bin/magento config:set admin/security/session_lifetime 31536000
bin/magento config:set payment/cashondelivery/active 1
bin/magento cache:flush
```

### Cypress tests
I use PNP as a package manager for re-usable packages, so here is the way I would do it
```shell
npm i -g pnpm
pnpm install
node_modules/.bin/cypress install
```
Running:
```shell
export CYPRESS_baseUrl=http://mage2.local
pnpm cypress open
```
If you prefer `npm` you can open with `node_modules/.bin/cypress open` as well.

You will need to enable a second payment method for the order tests to work:
```shell
bin/magento config:set payment/cashondelivery/active 1
```
