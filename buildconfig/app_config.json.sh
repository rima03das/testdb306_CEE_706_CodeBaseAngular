cat > /usr/share/nginx/html/assets/jsons/app_config.json << EOL
{
	"defaultStep": "$defaultStep_tid",
    "isSingleCondition": false,
    "singleApiKey": false,
    "multipleErrorMessage": true,
    "defaultLang": "",
    "API_TYPE": "INTERNAL",
    "tableHiddenGeneric": false,
    "messageTimeOut": 5000,
    "google_sitekey": "$googleSitekey",
    "navigateStepName": true,
    "navigateStepNameOnly": true,
    "customErrorSteps": [],
    "BASE_URL": "$backendBaseUrl",
    "OIDC_LOGOUT_HANDLER": "/authservice/session/logout",
    "OIDC_REFRESH_ACCESS_TOKEN_HANDLER": "",
    "OIDC": true,
    "SKIP_JSON_LOADER": true,
    "oidc_config": {
        "domain": "$oidc_config_domain",
        "clientId": "$oidc_config_clientId",
        "clientKey": "$oidc_config_clientKey",
        "redirectUri": "$oidc_config_redirectUri",
        "userInfoHandler": "$oidc_config_userInfoHandler"
    }
}
  

EOL