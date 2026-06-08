function load_product_data(dataset,tbl_product)
{
  var tbody = document.getElementById('product_table_body');
  tbody.innerHTML = '';
  for(var i=0;i<dataset.length;i++)  
  {
    var row = "<tr onclick='selectProduct(\"" + dataset[i].id + "\", \"" + dataset[i].name + "\", \"" + dataset[i].price + "\")'><td>"+dataset[i].id+"</td><td>"+dataset[i].name+"</td><td>"+dataset[i].price+"</td><td><img src='images/ic_remove.png' alt='Delete' style='cursor:pointer; width:24px; height:24px;' onclick='deleteRow(event)'></td></tr>";
    tbody.innerHTML += row;
  }
}

function addNewProduct()
{
  var newId = document.getElementById('new_product_id').value;
  var newName = document.getElementById('new_product_name').value;
  var newPrice = document.getElementById('new_product_price').value;
  
  var newProduct = {id: parseInt(newId), name: newName, price: parseFloat(newPrice)};
  products.push(newProduct);
  
  load_product_data(products, document.getElementById('tbl_product'));
  
  document.forms['add_product_form'].reset();
  
  return false;
}

function selectProduct(id, name, price)
{
  document.getElementById('product_id').value = id;
  document.getElementById('product_name').value = name;
  document.getElementById('product_price').value = price;
}

function deleteRow(event)
{
  event.stopPropagation();
  if(confirm('Are you sure you want to delete this row?'))
  {
    var row = event.target.closest('tr');
    if(row)
    {
      row.remove();
    }
  }
}