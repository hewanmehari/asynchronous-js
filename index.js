async function sendReminder() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Reminder sent to user!");
      }, 3000);
    });
  }
  
  async function logReminder() {
    const message = await sendReminder();
    console.log(message);
  }
  
  logReminder();





//   async function checkServer() {
//     return new Promise((resolve, reject) => {
//       const isUp = Math.random() > 0.2; // 80% chance server is up
//       if (isUp) resolve("Server is running");
//       else reject("Server down");
//     });
//   }
  
//   const intervalId = setInterval(() => {
//     checkServer()
//       .then(status => console.log(status))
//       .catch(error => console.log(error));
//   }, 5000);
  
//   setTimeout(() => {
//     clearInterval(intervalId);
//     console.log("Stopped checking server status.");
//   }, 30000);
  



  async function showNotifications(messages) {
    for (const message of messages) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(message);
    }
    console.log("All notifications sent");
  }
  
  showNotifications(["Welcome!", "Check your inbox", "Don't forget to log out"]);




  async function fetchDataWithRetry() {
    let attempts = 0;
  
    while (attempts < 3) {
      try {
        const result = await new Promise((resolve, reject) => {
          const success = Math.random() > 0.5;
          setTimeout(() => {
            success ? resolve("Data fetched") : reject("Fetch failed");
          }, 2000);
        });
        console.log(result);
        return;
      } catch (error) {
        attempts++;
        console.log(error);
      }
    }
  
    console.log("Failed after 3 attempts");
  }
  
  fetchDataWithRetry();





  function startCountdown(n) {
    const intervalId = setInterval(() => {
      console.log(n);
      n--;
  
      if (n < 0) {
        clearInterval(intervalId);
        launchProduct();
      }
    }, 1000);
  }
  
  async function launchProduct() {
    return new Promise(resolve => {
      resolve("Product Launched!");
    }).then(message => console.log(message));
  }
  
  startCountdown(5); // Starts countdown from 5
  
  