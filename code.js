const coin = {
  state: 0,
  flip: function () {
    // 1. Randomly set your coin object's "state" property to be either
    //    0 or 1: use "this.state" to access the "state" property on this object.
    this.state = Math.floor(Math.random() * 2);
    return this.state;
  },
  toString: function () {
    // 2. Return the string "Heads" or "Tails", depending on whether
    //    "this.state" is 0 or 1.
    let headsOrTails;

    if (this.state === 0)
    {
      headsOrTails = "Heads";
    }
    else if (this.state === 1)
    {
      headsOrTails = "Tails";
    }
    return headsOrTails;
  },
  toHTML: function () {
    const image = document.createElement("img");
    // 3. Set the properties of this image element to show either face-up
    //    or face-down, depending on whether this.state is 0 or 1.
    //    You can use the heads and tails images inside of the "images" folder
    if (this.state === 0)
    {
      image.src = "/images/heads.png"
    }
    else if (this.state === 1)
    {
      image.src = "images/tails.png"
    }
     
    return image;
  },
};

function display20Flips() {
  const results = [];
  // 4. Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.
  for (let flipCoin = 0; flipCoin < 20 ; flipCoin ++)
  {
    coin.flip();
    result = coin.toString();

    let coinFlipResultsHtml = document.createElement("div");
    coinFlipResultsHtml.append(result);
    document.body.append(coinFlipResultsHtml);
     results.push(result)
  }

  let displayResults = JSON.stringify(results);
  document.body.append(displayResults);
}

function display20Images() {
  const results = [];
  // 5. Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.

  for (let flipCoin = 1; flipCoin <= 20; flipCoin ++) {
    coin.flip();
    result = coin.toHTML();

    let displaySection = document.createElement("div");
    displaySection.append(result);

    document.body.append(displaySection);

    results.push(coin.toString());
  }
  let displayResults = JSON.stringify(results);
  document.body.append(displayResults);

}

function createButtons() {
  let stringButton = document.createElement("button");
  stringButton.innerText = "Flip coin 20x & Display Results";
  stringButton.addEventListener("click", display20Flips);
  document.body.append(stringButton);

  let imgButton = document.createElement("button");
  imgButton.innerText = "Flip coin 20x and Display 20 Images";
  imgButton.addEventListener("click", display20Images);
  document.body.append(imgButton);
}
createButtons();