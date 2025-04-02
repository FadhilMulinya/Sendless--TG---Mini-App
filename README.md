

### **1. Clone the Repository**  
Open your terminal and run:  
```sh
git clone git@github.com:FadhilMulinya/Sendless--TG---Mini-App.git
```

### **2. Enter the Repository**  
```sh
cd Sendless--TG---Mini-App
```

### **3. Install Dependencies**  
Since you're using **pnpm**, install the required dependencies:  
```sh
pnpm install
```

### **4. Start the Project**  
```sh
pnpm run dev
```
### **5. Set Up the Telegram Bot**  
- Open Telegram and search for **BotFather**.
- Click **Start** and type `/newbot`.
- Follow the setup steps (choose a name and a unique bot username).
- After creation, **copy the bot token**.

### **6. Get an HTTPS RPC URL**  
Choose one of these:  
- **Alchemy** ([alchemy.com](https://www.alchemy.com/))
- **Infura** ([infura.io](https://infura.io/))
- **QuickNode** ([quicknode.com](https://www.quicknode.com/))  

Create a project, select your network **base**, and **copy the HTTPS RPC URL**.

### **7. Get Your Wallet’s Private Key**  
- Open **MetaMask** (or your wallet of choice).  
- Go to **Settings > Security & Privacy > Export Private Key**.  
- Enter your password and **copy the private key**.  
- **DO NOT share this key with anyone.**  

### **8. Add Environment Variables (`.env` file)**  
Create a `.env` file in the project’s root:  
```sh
cp .env.example .env
```
Then, add:  
```ini
BOT_TOKEN=<your-bot-token>
RPC_URL=<your-rpc-url>
PRIVATE_KEY=<your-private-key>
```
Replace placeholders with actual values gotten above.

### **9. Start Your Telegram Bot**  
- Go to Telegram and open your bot.  
- Type `/start` and press enter.  
- If everything is configured correctly, your bot should respond! 🎉  

---
