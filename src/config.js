const dev = {
  STRIPE_KEY: "pk_test_51GsxMOKrMoWcn0H7rljnblTSIXrfeNyFnUDfjCY9Mxred4adFzOLMMiS0W2YxVlPTewMLJHEiYHZa92HIjJr90i0002KakpoKz",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1b3ix22muh7jx"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://i0xlgn4fld.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_MsipEN43m",
    APP_CLIENT_ID: "6e157dv63f22g5m3r629ff5678",
    IDENTITY_POOL_ID: "us-east-2:6e222597-b9a5-4607-a2e8-9dede4930c1e"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51GsxMOKrMoWcn0H7rljnblTSIXrfeNyFnUDfjCY9Mxred4adFzOLMMiS0W2YxVlPTewMLJHEiYHZa92HIjJr90i0002KakpoKz",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1bzeyuua56lqx"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://msqfkcgamk.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_cDBY3cCn7",
    APP_CLIENT_ID: "70iqr9rmioup7o88cjto06n91t",
    IDENTITY_POOL_ID: "us-east-2:d7b98156-70bc-4d24-8838-1ac48c0a7746"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};