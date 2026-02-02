        function generateRandomString(length = 12) {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let result = "";
            for (let i = 0; i < length; i++) {
                result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return result;
        }

        const randomData = generateRandomString();
        document.getElementById("data").innerText = "Encoded Data: " + randomData;

        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${randomData}`;
        document.getElementById("qr").src = qrUrl;