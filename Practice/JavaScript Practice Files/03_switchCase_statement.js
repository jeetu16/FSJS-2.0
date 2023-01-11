let user = "user";

switch (user) {
    case 'admin':
        console.log("You get full Access");
        break;
    case 'subadmin':
        console.log("gets access to delete/create courses");
        break;
    case 'testprep':
        console.log("gets access to delete/create tests");
        break;
    case 'user':
        console.log("gets access to consume the content");
        break;
    default:
        console.log("Trial User");
        break;
}