class Auth {
  constructor() {
    this.authenticated = false;
  }

  async login({ email, password }, cb) {
    // Fake authentication:
    if (email === "test@test.com" && password === "abc123") {
      const authResult = { loggedIn: true, message: "Login successful" };
      this.authenticated = true;
      cb(authResult);
    } else {
      const authResult = { loggedIn: false, message: "Login failed" };
      cb(authResult);
    }
    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    // const raw = JSON.stringify({
    //   email,
    //   password
    // });

    // const requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: "follow",
    //   credentials: "same-origin"
    // };

    // try {
    //   const response = await trackPromise(fetch("/api/login", requestOptions));
    //   const { loggedIn, message } = await response.json();

    //   if (loggedIn) {
    //     this.authenticated = true;
    //     const authResult = { loggedIn: true, message };
    //     next(authResult);
    //   } else {
    //     const authResult = { loggedIn: false, message };
    //     next(authResult);
    //   }
    // } catch (err) {
    //   console.log(err);
    // }

    // return { loggedIn: false, message: "An error occurred." };
  }

  async logout(cb) {
    this.authenticated = false;
    if (cb) {
      cb();
    }
  }

  loggedIn() {
    return this.authenticated;
  }
}

export default new Auth();
