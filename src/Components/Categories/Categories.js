import { Button, Content, Row, Col } from 'adminlte-2-react';
import { useEffect, useState } from 'react';
import CategoryModal from './CategoriesModal';

function Categories() {
    const [show, setShow] = useState(false);
    const [sendData, setSendData] = useState([]);
    const [categories, setCategories] = useState([]);

    var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYXNkQGdtYWlsLmNvbSIsImp0aSI6IjM5NTA0NDFjLTVlNTItNDMwYi04MDYxLWZmMDkyNmZjYTRkYSIsImV4cCI6MTY5NjA5MDQzMCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzAyOC8ifQ.K73S8cxbVDf5zzN6VWeefgteKbGvYomH2tLIZTPZ7CI"

    const fetchCategories = () => {
        return fetch("https://localhost:7028/api/categories/getcategories", { headers: { "Authorization": "Bearer " + token } })
            .then((res) => res.json())
            .then((d) => setCategories(d))
    }

    useEffect(() => {
        fetchCategories();
    }, []);



    const updateCategory = (id, data) => {
        return fetch("https://localhost:7028/api/categories/"+id, { 
            method: 'PUT',
            headers: { "Authorization": "Bearer " + token, "Content-Type": "application/json;" }, 
            body: JSON.stringify(data)
        })
            .then((res) => console.log(res))
            .then((d) => console.log(d))
    }

    const addCategory = (data) => {
        return fetch("https://localhost:7028/api/categories/", { 
            method: 'POST',
            headers: { "Authorization": "Bearer " + token, "Content-Type": "application/json;" }, 
            body: JSON.stringify(data)
        })
            .then((res) => console.log(res))
            .then((d) => console.log(d))
    }

    const deleteCategory = (id) => {
        return fetch("https://localhost:7028/api/categories/"+id, { 
            method: 'delete',
            headers: { "Authorization": "Bearer " + token, "Content-Type": "application/json;" }, 
        })
            .then((res) => console.log(res))
            .then((d) => console.log(d))

    }



    return (
        <div>
            <CategoryModal show={show} setShow={setShow} updateCategory={updateCategory} addCategory={addCategory} data={sendData} />

            <Content title="Admin" subTitle="Categories" browserTitle="Admin Page - Categories">
                <Row className='p-2'>
                    <Col xs={1}></Col>
                    <Col xs={8}>
                        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </Col>
                    <Col xs={2}></Col>
                    <Col xs={1}>
                        <Button id="1" size="md" text='Add new' className='w-100' type="primary" onClick={() => {setSendData([null, categories]); setShow(true)}} />

                    </Col>


                    <table className="table table-striped table-hover text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((item, index) => {
                                return (<tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item["name"]}</td>
                                    <td><Button size="sm" text='Edit' className='w-100' type="primary" onClick={() => {setShow(true); setSendData(item)}}/> <Button size="sm" text='Delete' className='w-100' type="danger" onClick={() => deleteCategory(item["id"])} /></td>
                                </tr>
                                )
                            })}


                        </tbody>
                    </table>
                </Row>
            </Content>
        </div>
    )
}
export default Categories;