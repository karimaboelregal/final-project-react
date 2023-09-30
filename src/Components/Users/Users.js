import { Button, Content, Row, Col } from 'adminlte-2-react';
import { useEffect, useState } from 'react';
import UserModal from './UserModal';

function Users() {
    var data = [{ title: "Sdfad" }, "Sdfadsf"]
    var columns = [{ title: "asdfds" }, { title: "asdfds" }]

    const [show, setShow] = useState(false);

    return (
        <div>

            <UserModal show={show} setShow={setShow}/>

            <Content title="Admin" subTitle="Users" browserTitle="Admin Page - Users">
                <Row className='p-2'>
                    <Col xs={1}></Col>
                    <Col xs={8}>
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </Col>
                    <Col xs={2}></Col>
                    <Col xs={1}>
                        <Button id="1" size="md" text='Add new' className='w-100' type="primary" />

                    </Col>


                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr onClick={() => setShow(true)}>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </Row>
            </Content>
        </div>
    )
}
export default Users;