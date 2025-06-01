async function getData() {
  try {
    const name = document.getElementById("name");
    const pokeId = document.getElementById("pokeId");
    const pokeType = document.getElementById("pokeType");
    const pokeWeight = document.getElementById("pokeWeight");
    const pokeHeight = document.getElementById("pokeHeight");
    const pokemon = document.getElementById("pokeName").value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const data = await response.json();
    const getSpriteFront = data.sprites.front_default;
    const getSpriteBack = data.sprites.back_default;
    const imgFront = document.getElementById("pokeImageFront");
    const imgBack = document.getElementById("pokeImageBack");

    name.textContent = data.name.toUpperCase();
    pokeId.textContent = `${data.id}#`;
    pokeWeight.textContent = `Height: ${data.weight / 10}m`;
    pokeHeight.textContent = `Weight: ${data.height / 10}kg`;
    const pokeType1 = `${data.types[0].type.name}`;

    if (typeof data.types[1] === "undefined") {
      pokeType.textContent = `Type: ${pokeType1}`;
    } else {
      const pokeType2 = `${data.types[1].type.name}`;
      pokeType.textContent = `Type: ${pokeType1}/${pokeType2}`;
    }

    console.log(data);
    imgFront.src = getSpriteFront;
    imgBack.src = getSpriteBack;

    if (!response.ok) {
      throw new Error("Could not Access The resourse");
    }
  } catch (error) {
    document.getElementById("name").textContent = "Not Found";
    document.getElementById("pokeId").textContent = "";
    document.getElementById("pokeType").textContent = "";
    document.getElementById("pokeWeight").textContent = "";
    document.getElementById("pokeHeight").textContent = "";
    document.getElementById("pokeImageFront").src = "";
    document.getElementById("pokeImageBack").src = "";
  }
}
