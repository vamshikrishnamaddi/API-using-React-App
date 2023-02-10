import React,{useState,useEffect} from 'react';
import ClayTable from '@clayui/table';
import ClayForm, {ClayInput} from '@clayui/form';
import Button from '@clayui/button';
import DropDown from '@clayui/drop-down';

function App() {
  const list=[]
  const [lists,setList]=useState(list); 
  function Disable()
  {
    document.getElementById('Blogs').style.display="none";
    document.getElementById('Documents').style.display="none";
    document.getElementById('Knowledges').style.display="none";    
  }
	function created()
	{
		document.getElementById('maddi').innerHTML='Clicked';
		document.getElementById("ID").style.display ='';
    var a=document.getElementById('titles').value;
    var b=document.getElementById('descs').value;
    var c=document.getElementById('ids').value;
    if(a=='' || b=='')
    {
      alert("Fill the Details");
      return;
    }	
    var url="/o/headless-delivery/v1.0/sites/20121/blog-postings/";
    var data= {headline:a , articleBody:b};
    var auth ="Basic " + btoa("test@liferay.com:learn");
    fetch(url,{
    	method:"POST",
    	body:JSON.stringify(data),
    	headers:{
    		"Content-Type":"application/json",
    		"Authorization":auth
    	}
    }).then(response=>response.json())
      .then(data=>{
    	console.log("Success:",data);
    }).catch(error=>{
    	console.log("Error:",error);
    });
    

	}
	function readed()
	{
		document.getElementById('maddi').innerHTML='Readed';
    document.getElementById('display2').style.display="";
		console.log("Readed");
    var a=document.getElementById('titles').value;
    var b=document.getElementById('descs').value;
    const api_url =
	"/o/headless-delivery/v1.0/sites/20121/blog-postings/";
  async function getapi(url) {
	var auth ="Basic " + btoa("test@liferay.com:learn");
	const response = await fetch(url,{headers:{"Content-Type":"application/json",
												"Authorization":auth}});
	var data = await response.json();
  console.log(data);
	show(data);
}
getapi(api_url);
function show(data) {

 console.log('its Showedd');
 const newList=[];
for (let r of data.items) {
  newList.push({
    id:r.id,
    name:r.headline,
    desc:r.articleBody,
    doc:'---------------',
  })
  console.log(r.id);
}
  console.log(newList);
 setList(newList);
  } 
  }
	function updated()
	{
		document.getElementById('maddi').innerHTML='Updated';
		console.log("Updated");
    var a=document.getElementById('titles').value;
    var b=document.getElementById('descs').value;
    var c=document.getElementById('ids').value;
    if(a=='' || b==''|| c=="")
    {
      alert("Fill the Details");
      return;
    }	
      var url="/o/headless-delivery/v1.0/blog-postings/"+c;
      var data= {headline:a , articleBody:b};
      var auth ="Basic " + btoa("test@liferay.com:learn");
      fetch(url,{
        method:"PATCH",
        body:JSON.stringify(data),
        headers:{
          "Content-Type":"application/json",
          "Authorization":auth
        }
      }).then(response=>response.json())
        .then(data=>{
        console.log("Success:",data);
      }).catch(error=>{
        console.log("Error:",error);
      });
      readed()
	}
  function deleted()
	{
		document.getElementById('maddi').innerHTML='Deleted';
		console.log("Deleted");
		document.getElementById("ID").style.display ='';
     
    var c=document.getElementById('ids').value;
    if(c=='')
    {
      alert("Fill the Details");
      return;
    }	
     var url="/o/headless-delivery/v1.0/blog-postings/"+c;
     var auth ="Basic " + btoa("test@liferay.com:learn");
     fetch(url,{
         method:"DELETE",
         headers:{
           "Content-Type":"application/json",
           "Authorization":auth
         }
       });
       readed()
	}

  function postfile()
{
  
	var f=document.getElementById('myFile');
  if(f.value=='')
    {
      alert("Fill the Details");
      return;
    }	
	const formData =new FormData();
	formData.append('file',f.files[0]);
	console.log(formData);
    var url="/o/headless-delivery/v1.0/sites/20121/documents";
    var auth ="Basic " + btoa("test@liferay.com:learn");
    fetch(url,{
    	method:"POST",
    	body:formData,
    	headers:{
    		"Authorization":auth,
    	}
    }).then(response=>response.json())
      .then(data=>{
    	console.log("Success:",data);

    }).catch(error=>{
    	console.log("Error:",error);
    });
  }

  function getfile()
  {	
    const api_url =
      "/o/headless-delivery/v1.0/sites/20121/documents";
    async function getapi(url) {
      var auth ="Basic " + btoa("test@liferay.com:learn");
      const response = await fetch(url,{headers:{
                            "Authorization":auth,}});
      var data = await response.json();
      console.log(data);
      show(data);
    }
    getapi(api_url);
    function show(data) {

      console.log('its Showedd');
      const newList=[];
     for (let r of data.items) {
      var a="http://localhost:8080"+r.contentUrl;
       newList.push({
         id:r.id,
         doc:<a href={a}>{r.title}</a>,
         desc:'---------------',
         name:'---------------',
       })
       console.log(r.id);
     }
       console.log(newList);
      setList(newList);
    }
  }

  function deletefile()
  {
    var c=document.getElementById('ids').value;
    if(c=='')
    {
      alert("Fill the Details");
      return;
    }	
      var url="/o/headless-delivery/v1.0/documents/"+c;
      var auth ="Basic " + btoa("test@liferay.com:learn");
      fetch(url,{
        method:"DELETE",
        headers:{
          "Authorization":auth,
        }
      });
      getfile()
  }

  function updatefile()
  {
    var f=document.getElementById('myFile');
    if(f.value=='')
    {
      alert("Fill the Details");
      return;
    }	
    const formData =new FormData();
    formData.append('file',f.files[0]);
    var c=document.getElementById('ids').value;
      var url="/o/headless-delivery/v1.0/documents/"+c;
      var auth ="Basic " + btoa("test@liferay.com:learn");
      fetch(url,{
        method:"PATCH",
        body:formData,
        headers:{
          "Authorization":auth
        }
      }).then(response=>response.json())
        .then(data=>{
        console.log("Success:",data);
      }).catch(error=>{
        console.log("Error:",error);
      });
      getfile()
  } 

  function kbasecreate()
{
	console.log("Hello World");
	var a=document.getElementById('titles').value;
	var b=document.getElementById('descs').value;
  if(a=='' || b=='')
    {
      alert("Fill the Details");
      return;
    }	
    var url="/o/headless-delivery/v1.0/sites/20121/knowledge-base-articles";
	var data= {title:a , articleBody:b};
	console.log(data);
    var auth ="Basic " + btoa("test@liferay.com:learn");
    fetch(url,{
    	method:"POST",
    	body:JSON.stringify(data),
    	headers:{
    		"Content-Type":"application/json",
    		"Authorization":auth
    	}
    }).then(response=>response.json())
      .then(a=>{
    	console.log("Success:",a);
    }).catch(error=>{
    	console.log("Error:",error);
    });
  }

  function kbaseget()
  {
    const api_url =
      "/o/headless-delivery/v1.0/sites/20121/knowledge-base-articles";
    async function getapi(url) {
      var auth ="Basic " + btoa("test@liferay.com:learn");
      const response = await fetch(url,{headers:{"Content-Type":"application/json",
                            "Authorization":auth}});
      var data = await response.json();
      show(data);
    }
    getapi(api_url);
    function show(data) {

      console.log('its Showedd');
      const newList=[];
      for (let r of data.items) {
        newList.push({
          id:r.id,
          name:r.title,
          desc:r.articleBody,
          doc:'---------------',
        })
        console.log(r.id);
      }
        console.log(newList);
      setList(newList);
      }
  }

  function kbaseupdate()
  {
    var a=document.getElementById('titles').value;
    var b=document.getElementById('descs').value;
    var c=document.getElementById('ids').value;
    if(a=='' || b==''||c=="")
    {
      alert("Fill the Details");
      return;
    }	
      var url="/o/headless-delivery/v1.0/knowledge-base-articles/"+c;
      var data= {title:a , articleBody:b};
      var auth ="Basic " + btoa("test@liferay.com:learn");
      fetch(url,{
        method:"PATCH",
        body:JSON.stringify(data),
        headers:{
          "Content-Type":"application/json",
          "Authorization":auth
        }
      }).then(response=>response.json())
        .then(data=>{
        console.log("Success:",data);
      }).catch(error=>{
        console.log("Error:",error);
      });
      kbaseget();
  }

  function kbasedelete()
  {
    var c=document.getElementById('ids').value;
    if(c=='')
    {
      alert("Fill the ID");
      return;
    }	
    var url="/o/headless-delivery/v1.0/knowledge-base-articles/"+c;
    var auth ="Basic " + btoa("test@liferay.com:learn");
    fetch(url,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json",
          "Authorization":auth
        }
      });
    alert("Deleted Sucessfully");
    kbaseget();
  }

  const items = [
		{
		  children: [
			{ id: 1, name: "Blogs" },
			{ id: 2, name: "Documents" },
			{ id: 3, name: "Knowledge Base" }
		  ],
		  id: 1,
		  name: "API"
		},
	  ];
      function Blogs()
      {
        document.getElementById('Blogs').style.display="";
        document.getElementById('Documents').style.display="none";
        document.getElementById('Knowledges').style.display="none";
      }
      function Documents()
      {
        document.getElementById('Blogs').style.display="none";
        document.getElementById('Documents').style.display="";
        document.getElementById('Knowledges').style.display="none";
      }
      function Knowledges()
      {
        document.getElementById('Blogs').style.display="none";
        document.getElementById('Documents').style.display="none";
        document.getElementById('Knowledges').style.display="";
      }
      useEffect(() => {
        Disable();
      })
	return (
		<>
		<div inline>
		<div className="sheet sheet-lg">
      <div className="sheet-header">
        <h2 className="sheet-title center">Application programming interface (API)</h2>
      </div>
      <div className="sheet-section">
		<ClayForm.Group className="form-group-sm has-success">
        <label htmlFor="basicInput">TITLE</label>
        <ClayInput placeholder="Enter The Title" type="text" id="titles"></ClayInput>
      </ClayForm.Group>

		<ClayForm.Group className="form-group-sm has-success">
        <label htmlFor="basicInput">DESCRIPTION</label>
        <textarea className="form-control" placeholder="Enter The Description" id="descs"></textarea>
      </ClayForm.Group>

	  <ClayForm.Group className="form-group-sm has-success" id='ID' >
        <label htmlFor="basicInput">ID</label>
        <ClayInput placeholder="Enter The ID" type="number" id="ids"></ClayInput>
      </ClayForm.Group>

      <ClayForm.Group className="form-group-sm has-success">
        <label htmlFor="basicInput">Upload File</label>
        <ClayInput placeholder="Upload the file" type="file" id="myFile"></ClayInput>
      </ClayForm.Group>

      </div>

      <DropDown filterKey="name" trigger={<Button>Select</Button>} style={{textAlign : 'center'}}>
      <DropDown.ItemList items={items}>
        {item => (
          <DropDown.Group
            header={item.name}
            items={item.children}
            key={item.name}
          >
            {item => (
              <DropDown.Item
                key={item.name}
                onClick={() => {
                 if(item.id==1)
                 Blogs()
                 else if(item.id==2)
                 Documents()
                 else
                 Knowledges()
                }}
              >
                {item.name}
              </DropDown.Item>
            )}
          </DropDown.Group>
        )}
      </DropDown.ItemList>
    </DropDown>
      <div className="sheet-footer sheet-footer-btn-block-sm-down" id="Blogs" >
        <div className="btn-group " style={{textAlign : 'center'}}>
          <div className="btn-group-item">
            <button className="btn btn-success" type="button" onClick={created}>Create</button>
          </div>
		  <div className="btn-group-item">
            <button className="btn btn-warning" type="button" onClick={readed}>Read</button>
          </div>
		  <div className="btn-group-item">
            <button className="btn btn-primary" type="button" onClick={updated}>Update</button>
          </div>
		  <div className="btn-group-item">
            <button className="btn btn-danger" type="button" onClick={deleted}>Delete</button>
          </div>
        </div>
      </div>

      <div className="sheet-footer sheet-footer-btn-block-sm-down" id="Documents">
        <div className="btn-group" style={{textAlign : 'center'}}>
          <div className="btn-group-item">
            <button className="btn btn-success" type="button" onClick={postfile}>Doc Upload</button>
          </div>
		  <div className="btn-group-item">
            <button className="btn btn-warning" type="button" onClick={getfile}>Doc Read</button>
          </div>
		  <div className="btn-group-item">
            <button className="btn btn-primary" type="button" onClick={updatefile}>Doc Update</button>
          </div>
		  <div className="btn-group-item">
            <button className="btn btn-danger" type="button" onClick={deletefile}>Doc Delete</button>
          </div>
        </div>
      </div>

      <div className="sheet-footer sheet-footer-btn-block-sm-down"  id="Knowledges">
        <div className="btn-group" style={{textAlign : 'center'}}>
          <div className="btn-group-item">
            <button className="btn btn-success" type="button" onClick={kbasecreate}>KBase Create</button>
          </div>
		  <div className="btn-group-item">
            <button className="btn btn-warning" type="button" onClick={kbaseget}>KBase Read</button>
          </div>
		  <div className="btn-group-item">
            <button className="btn btn-primary" type="button" onClick={kbaseupdate}>KBase Update</button>
          </div>
		  <div className="btn-group-item">
            <button className="btn btn-danger" type="button" onClick={kbasedelete}>KBase Delete</button>
          </div>
        </div>
      </div>
    </div>
  <div id='display2'>
		<ClayTable>
      <ClayTable.Body>
        <ClayTable.Row>
          <ClayTable.Cell headingCell id='clayhname'>
            {"Title"}
          </ClayTable.Cell>
          <ClayTable.Cell headingCell id='clayhdesc'>{"Description"}</ClayTable.Cell>
          <ClayTable.Cell headingCell id='clayhdoc'>{"Document"}</ClayTable.Cell>
          <ClayTable.Cell headingCell id='clayhid'>{"Id"}</ClayTable.Cell>
        </ClayTable.Row>
      { 
                  lists.map((current) => (
                  <ClayTable.Row>
                  <ClayTable.Cell headingTitle id='clayname'>{current.name}</ClayTable.Cell>
                  <ClayTable.Cell id='claydesc'>{current.desc}</ClayTable.Cell>
                  <ClayTable.Cell id='claydoc'>{current.doc}</ClayTable.Cell>
                  <ClayTable.Cell id='clayid'>{current.id}</ClayTable.Cell>
                </ClayTable.Row>
                  ))
                
      }
      </ClayTable.Body>
    </ClayTable>
    </div>
	</div>
	</>
	);
}
export default App;
