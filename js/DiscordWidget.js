fetch("https://discord.com/api/guilds/1132695860594081932/widget.json")
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error =>{
    console.error("Hiba az Api lekérdezés során", error);
});