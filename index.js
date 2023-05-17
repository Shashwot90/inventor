const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

const sideBar = document.querySelector(".sidebar");
// show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

//close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

//change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

//change navbar onclick
const sidebarItems = document.querySelectorAll('.sidebar a');

sidebarItems.forEach((item) => {
  item.addEventListener('click', () => {
    sidebarItems.forEach((sidebarItem) => {
      sidebarItem.classList.remove('active');
    });
    item.classList.add('active');
  });
});



//sideBar.addEventListener('click', () => {
    // document.getElementsByTagName(a).className = "active";
    // document.body.classList.toggle('active');

    // sideBar.querySelector('span:nth-child(1)').classList.toggle('active');
    // sideBar.querySelector('span:nth-child(2)').classList.toggle('active');
    
//})

// function addClass() {
//     document.getElementsByTagName(a).className = "active";
// }

//Add Category
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }





// HTML to Excel
function html_table_to_excel(type)
    {
        var data = document.getElementById('category_data');

        var file = XLSX.utils.table_to_book(data, {sheet: "sheet1"});

        XLSX.write(file, { bookType: type, bookSST: true, type: 'base64' });

        XLSX.writeFile(file, 'file.' + type);
    }

    const export_button = document.getElementById('export_button');

    export_button.addEventListener('click', () =>  {
        html_table_to_excel('xlsx');
    });




//image load product page

const uploadBtn = document.getElementById('uploadBtn');
const imageContainer = document.getElementById('imageContainer');

uploadBtn.addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/jpg , image/png';

  input.addEventListener('change', (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      const image = new Image();
      image.src = event.target.result;
      image.style.maxWidth = '100%';
      image.style.maxHeight = '100%';
      imageContainer.innerHTML = '';
      imageContainer.appendChild(image);
      imageContainer.style.display = 'block';
    });

    reader.readAsDataURL(file);
  });

  input.click();
});



// var uploaded_image = "";
// function importData() {
//     let input = document.createElement('input');
//     input.type = 'file';
//     input.accept = 'image/png, image/jpg';
//     input.onchange = _ => {
//       // you can use this method to get file and perform respective operations
//               let files =   Array.from(input.files);
//               console.log(files);
//               const reader = new FileReader();
//               reader.addEventListener("load", () => {
//                 uploaded_image = reader.result;
//                 document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
//               })
//               reader.readAsDataURL(this.files[0]);

//           };
//     input.click();
    
//   }
//   const image_input = document.querySelector("#image_input");
//   image_input.addEventListener("change", function(){
//     const reader = new FileReader();
//               reader.addEventListener("load", () => {
//                 uploaded_image = reader.result;
//                 document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
//               })
//               reader.readAsDataURL(this.files[0]);
//   })






//edit button order page
function editProfile() {
    this.isEditable = !this.isEditable;
  }


//print bill from order page
function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}







//add row to table (order form table)

// select the table and the add button
var table = document.getElementById("my-table");
var addButton = document.getElementById("add-row-btn");

// add an event listener to the button
addButton.addEventListener("click", function() {
  // create a new row element and set its class name
  var newRow = table.insertRow();
  newRow.className = "height1";

  // add cells to the row and set their content and attributes
  var productCell = newRow.insertCell();
  var productSelect = document.createElement("select");
  productSelect.name = "product";
  var option1 = document.createElement("option");
  option1.value = "volvo";
  option1.text = "Volvo";
  var option2 = document.createElement("option");
  option2.value = "saab";
  option2.text = "Saab";
  var option3 = document.createElement("option");
  option3.value = "fiat";
  option3.text = "Fiat";
  var option4 = document.createElement("option");
  option4.value = "audi";
  option4.text = "Audi";
  productSelect.add(option1);
  productSelect.add(option2);
  productSelect.add(option3);
  productSelect.add(option4);
  productCell.appendChild(productSelect);

  var qtyCell = newRow.insertCell();
  var qtyInput = document.createElement("input");
  qtyInput.type = "number";
  qtyInput.min = "1";
  qtyInput.placeholder = "Enter Qty";
  qtyInput.name = "qty";
  qtyInput.required = true;
  qtyCell.appendChild(qtyInput);

  var rateCell = newRow.insertCell();
  var rateInput = document.createElement("input");
  rateInput.type = "text";
  rateInput.placeholder = "";
  rateInput.name = "rate";
  rateInput.disabled = true;
  rateCell.appendChild(rateInput);

  var amountCell = newRow.insertCell();
  var amountInput = document.createElement("input");
  amountInput.type = "text";
  amountInput.placeholder = "";
  amountInput.name = "amount";
  amountInput.disabled = true;
  amountCell.appendChild(amountInput);

  var deleteCell = newRow.insertCell();
  var deleteButton = document.createElement("button");
  deleteButton.className = "order-btn";
  var deleteIcon = document.createElement("span");
  deleteIcon.className = "material-icons-sharp";
  deleteIcon.textContent = "delete";
  deleteButton.appendChild(deleteIcon);
  deleteCell.appendChild(deleteButton);

  // add an event listener to the delete button
  deleteButton.addEventListener("click", function() {
    newRow.remove();
  });
});

// const addRowBtn = document.getElementById('add-row-btn');
// addRowBtn.addEventListener('click', addRow);

// function addRow() {
//   // Get a reference to the table body
//   const tableBody = document.querySelector('#my-table tbody');
  
//   // Create a new row element
//   const newRow = document.createElement('tr');
//   newRow.classList.add('height1');
  
//   // Add cells to the new row
//   const cell1 = document.createElement('td');
//   const cell2 = document.createElement('td');
//   const cell3 = document.createElement('td');
//   const cell4 = document.createElement('td');
//   const cell5 = document.createElement('td');
  
//   // Add content to the cells
//   const select = document.createElement('select');
//   select.setAttribute('name', 'product');
//   const option1 = document.createElement('option');
//   option1.setAttribute('value', 'volvo');
//   option1.textContent = 'Volvo';
//   const option2 = document.createElement('option');
//   option2.setAttribute('value', 'saab');
//   option2.textContent = 'Saab';
//   const option3 = document.createElement('option');
//   option3.setAttribute('value', 'fiat');
//   option3.textContent = 'Fiat';
//   const option4 = document.createElement('option');
//   option4.setAttribute('value', 'audi');
//   option4.textContent = 'Audi';
//   select.appendChild(option1);
//   select.appendChild(option2);
//   select.appendChild(option3);
//   select.appendChild(option4);
//   cell1.appendChild(select);
  
//   const inputQty = document.createElement('input');
//   inputQty.setAttribute('type', 'number');
//   inputQty.setAttribute('min', '1');
//   inputQty.setAttribute('placeholder', 'Enter Qty');
//   inputQty.setAttribute('name', 'qty');
//   inputQty.required = true;
//   cell2.appendChild(inputQty);
  
//   const inputRate = document.createElement('input');
//   inputRate.setAttribute('type', 'text');
//   inputRate.setAttribute('placeholder', '');
//   inputRate.setAttribute('name', 'rate');
//   inputRate.disabled = true;
//   cell3.appendChild(inputRate);
  
//   const inputAmount = document.createElement('input');
//   inputAmount.setAttribute('type', 'text');
//   inputAmount.setAttribute('placeholder', '');
//   inputAmount.setAttribute('name', 'amount');
//   inputAmount.disabled = true;
//   cell4.appendChild(inputAmount);
  
//   const deleteBtn = document.createElement('button');
//   deleteBtn.classList.add('order-btn');
//   deleteBtn.addEventListener('click', () => {
//     newRow.remove();
//   });
//   const deleteIcon = document.createElement('span');
//   deleteIcon.classList.add('material-icons-sharp');
//   deleteIcon.textContent = 'delete';
//   deleteBtn.appendChild(deleteIcon);
//   cell5.appendChild(deleteBtn);
  
//   newRow.appendChild(cell1);
//   newRow.appendChild(cell2);
//   newRow.appendChild(cell3);
//   newRow.appendChild(cell4);
//   newRow.appendChild(cell5);
  
//   // Add the new row to the table
//   tableBody.appendChild(newRow);
// }

// const addRowBtn = document.getElementById('add-row-btn');
// addRowBtn.addEventListener('click', addRow);

// function addRow() {
//   // Get a reference to the table element
//   const table = document.getElementById('my-table');

//   // Create a new row element
//   const newRow = table.insertRow();

//   // Add cells to the new row
//   const cell1 = newRow.insertCell();
//   const cell2 = newRow.insertCell();
//   const cell3 = newRow.insertCell();
//   const cell4 = newRow.insertCell();
//   const cell5 = newRow.insertCell();
//   // Add content to the cells
//   cell1.innerHTML = 'New Row';
//   cell2.innerHTML = 'Data';
//   cell3.innerHTML = 'Data';
//   cell4.innerHTML = 'Data';
//   cell5.innerHTML = 'Data';
// }

//delete btn category page
// const deleteButtons = document.querySelectorAll('.deleteBtn');
//   deleteButtons.forEach(button => {
//     button.addEventListener('click', function() {
//       const row = this.parentNode.parentNode;
//       row.remove();
//     });
//   });

  // function deleteRow(btn) {
  //   // Get the row that contains the button
  //   const row = btn.parentNode.parentNode;
    
  //   // Remove the row from the table
  //   row.remove();
  // }



//   function deleteRow(el) {
//     if(!confirm("Are you sure you want to delete?")) return;
    
//     var tbl = el.parentNode.parentNode.parentNode;
//     var row = el.parentNode.parentNode.rowIndex;

//     tbl.deleteRow(row);
  
// }
function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("category_data").deleteRow(i);
}