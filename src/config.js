export default {
  STRIPE_KEY: "pk_test_51GsxMOKrMoWcn0H7rljnblTSIXrfeNyFnUDfjCY9Mxred4adFzOLMMiS0W2YxVlPTewMLJHEiYHZa92HIjJr90i0002KakpoKz",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "thebkrasri-notes"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://1gxuiapeq7.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_pELW6fZ6Q",
    APP_CLIENT_ID: "7ijuijl7899fqnmtrb1abc4o9n",
    IDENTITY_POOL_ID: "us-east-2:50f00b92-6c75-4329-8b27-0b5fdc6a6b75"
  }
};