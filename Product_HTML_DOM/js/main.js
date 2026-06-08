function load_product_data(dataset,tbl_product)
{
  var tbody = document.getElementById('product_table_body');
  for(var i=0;i<dataset.length;i++)  
  {
    var row = "<tr onclick='selectProduct(\"" + dataset[i].id + "\", \"" + dataset[i].name + "\", \"" + dataset[i].price + "\")'><td>"+dataset[i].id+"</td><td>"+dataset[i].name+"</td><td>"+dataset[i].price+"</td><td><img src='images/ic_remove.png' alt='Delete' style='cursor:pointer; width:24px; height:24px;' onclick='deleteRow(event)'></td></tr>";
    tbody.innerHTML += row;
  }
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