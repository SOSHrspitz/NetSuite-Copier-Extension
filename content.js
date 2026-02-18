
class Options {
    constructor({finish, dimensions, misc, tag, material1, lamping, comMaterialRequired, material2, material3, material4, top, base, feet} = {}) {
    this.finish = finish;
    this.dimensions = dimensions;
    this.misc = misc;
    this.tag = tag;
    this.material1 = material1;
    this.lamping = lamping;
    this.comMaterialRequired = comMaterialRequired;
    this.material2 = material2;
    this.material3 = material3;
    this.material4 = material4;
    this.top = top;
    this.base = base;
    this.feet = feet;
    }
}

function getOptionsToCopy() {
    const options = new Options();
    options.finish = document.querySelector('[name="custcolfinish"]').value
    options.dimensions = document.querySelector('[name="custcoldimensions"]').value
    options.misc = document.querySelector('[name="custcolmisc"]').value
    options.tag = document.querySelector('[name="custcol_tag_item_for"]').value
    options.material1 = document.querySelector('[name="custcol5"]').value
    options.lamping = document.querySelector('[name="custcol7"]').value
    options.comMaterialRequired = document.querySelector('[name="custcol_col_option"]').value
    options.material2 = document.querySelector('[name="custcol9"]').value
    options.material3 = document.querySelector('[name="custcol10"]').value
    options.material4 = document.querySelector('[name="custcol11"]').value
    options.top = document.querySelector('[name="custcol_top"]').value
    options.base = document.querySelector('[name="custcol_base"]').value
    options.feet = document.querySelector('[name="custcol_feet"]').value

    copyOptions(options);
}

function copyOptions(options) {
    chrome.storage.local.set({"currentOptions": JSON.stringify(options) })
}


function pasteOptions() {
    chrome.storage.local.get("currentOptions", (data) => {
        const options = JSON.parse(data.currentOptions);
        document.querySelector('[name="custcolfinish"]').value = options.finish;
        document.querySelector('[name="custcoldimensions"]').value = options.dimensions;
        document.querySelector('[name="custcolmisc"]').value = options.misc;
        document.querySelector('[name="custcol_tag_item_for"]').value = options.tag;
        document.querySelector('[name="custcol5"]').value = options.material1;
        document.querySelector('[name="custcol7"]').value = options.lamping;
        document.querySelector('[name="custcol_col_option"]').value = options.comMaterialRequired;
        document.querySelector('[name="custcol9"]').value = options.material2;
        document.querySelector('[name="custcol10"]').value = options.material3;
        document.querySelector('[name="custcol11"]').value = options.material4;
        document.querySelector('[name="custcol_top"]').value = options.top;
        document.querySelector('[name="custcol_base"]').value = options.base;
        document.querySelector('[name="custcol_feet"]').value = options.feet;
    })
}

const submitButton = document.querySelector('[name="submitter"]');
const cancelButton = document.querySelector('[name="cancel"]');

var copyButton = document.createElement("button");
copyButton.innerHTML = "Copy";
copyButton.type = "button";
copyButton.style.cssText = submitButton.style.cssText;
copyButton.style.backgroundColor = "#006aff";
copyButton.style.borderColor = "#006aff";
copyButton.style.color = "white";
copyButton.style.fontSize = "13px";
copyButton.style.fontWeight = "600";
copyButton.style.fontFamily = "Open Sans, Helvetica, sans-serif";
copyButton.style.height = "26px";
copyButton.style.width = "60.67px";
copyButton.style.display = "inline-flex";
copyButton.style.alignItems = "center";
copyButton.style.justifyContent = "center";
copyButton.style.cursor = "pointer";
copyButton.style.border = "1px solid transparent";
copyButton.style.textDecoration = "none";
copyButton.style.padding = "0 8px";   
copyButton.style.marginRight = "10px";
copyButton.style.borderRadius = "3px";
copyButton.onclick = function() {
  getOptionsToCopy();
};



var pasteButton = document.createElement("button");
pasteButton.innerHTML = "Paste";
pasteButton.type = "button";
pasteButton.style.cssText = cancelButton.style.cssText;
pasteButton.style.backgroundColor = "#006aff";
pasteButton.style.borderColor = "#006aff";
pasteButton.style.color = "white";
pasteButton.style.fontSize = "13px";
pasteButton.style.fontWeight = "600";
pasteButton.style.fontFamily = "Open Sans, Helvetica, sans-serif";
pasteButton.style.height = "26px";
pasteButton.style.width = "60.67px";
pasteButton.style.display = "inline-flex";
pasteButton.style.alignItems = "center";
pasteButton.style.justifyContent = "center";
pasteButton.style.cursor = "pointer";
pasteButton.style.border = "1px solid transparent";
pasteButton.style.textDecoration = "none";
pasteButton.style.padding = "0 8px";
pasteButton.style.marginRight = "10px";
pasteButton.style.borderRadius = "3px";
pasteButton.onclick = function() {
  pasteOptions();
};

const normalBg = "#006aff";
const hoverBg = "#0053cc";

copyButton.addEventListener("mouseover", () => {
  copyButton.style.backgroundColor = hoverBg;
  copyButton.style.borderColor = hoverBg;
});
copyButton.addEventListener("mouseout", () => {
  copyButton.style.backgroundColor = normalBg;
  copyButton.style.borderColor = normalBg;
});

pasteButton.addEventListener("mouseover", () => {
  pasteButton.style.backgroundColor = hoverBg;
  pasteButton.style.borderColor = hoverBg;
});
pasteButton.addEventListener("mouseout", () => {
  pasteButton.style.backgroundColor = normalBg;
  pasteButton.style.borderColor = normalBg;
});

const buttonRow = submitButton.closest('.uir-buttons');

const copyCell = document.createElement('td');
copyCell.appendChild(copyButton);

const pasteCell = document.createElement('td');
pasteCell.appendChild(pasteButton);

buttonRow.appendChild(copyCell);
buttonRow.appendChild(pasteCell);

const secondarySubmitButton = document.querySelector('[name="secondarysubmitter"]');
const secondaryCancelButton = document.querySelector('[name="secondarycancel"]');

if (secondarySubmitButton && secondaryCancelButton) {
  const bottomRow = secondarySubmitButton.closest('.uir-buttons');

  const copyButtonBottom = document.createElement("button");
  copyButtonBottom.type = "button";
  copyButtonBottom.innerHTML = "Copy";
  copyButtonBottom.style.cssText = copyButton.style.cssText;
  copyButtonBottom.onclick = function () {
    getOptionsToCopy();
  };
  copyButtonBottom.addEventListener("mouseover", () => {
    copyButtonBottom.style.backgroundColor = hoverBg;
    copyButtonBottom.style.borderColor = hoverBg;
  });
  copyButtonBottom.addEventListener("mouseout", () => {
    copyButtonBottom.style.backgroundColor = normalBg;
    copyButtonBottom.style.borderColor = normalBg;
  });

  const pasteButtonBottom = document.createElement("button");
  pasteButtonBottom.type = "button";
  pasteButtonBottom.innerHTML = "Paste";
  pasteButtonBottom.style.cssText = pasteButton.style.cssText;
  pasteButtonBottom.onclick = function () {
    pasteOptions();
  };
  pasteButtonBottom.addEventListener("mouseover", () => {
    pasteButtonBottom.style.backgroundColor = hoverBg;
    pasteButtonBottom.style.borderColor = hoverBg;
  });
  pasteButtonBottom.addEventListener("mouseout", () => {
    pasteButtonBottom.style.backgroundColor = normalBg;
    pasteButtonBottom.style.borderColor = normalBg;
  });

  const copyCellBottom = document.createElement('td');
  copyCellBottom.appendChild(copyButtonBottom);

  const pasteCellBottom = document.createElement('td');
  pasteCellBottom.appendChild(pasteButtonBottom);

  bottomRow.appendChild(copyCellBottom);
  bottomRow.appendChild(pasteCellBottom);

  copyButtonBottom.style.marginTop = "-4px";
  pasteButtonBottom.style.marginTop = "-4px";
}