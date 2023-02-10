import React from "react";
import {
    Row,

    Layout,
    Col,
    Button,
    Card,
    Typography,
    Form,
    Input,
    // Select,
    message,
    Divider,
    Watermark
} from 'antd';
import axios from 'axios';
import { useState, useEffect } from 'react';
//get data




const { Header, Content, Footer } = Layout;

const { Title } = Typography;
// table example
// const columns = [
//     {
//         title: 'no',
//         dataIndex: 'key',
//         defaultSortOrder: 'descend',
//         sorter: (a, b) => a.age - b.age,
//     },
//     {
//         title: 'klub',
//         dataIndex: 'name'
//     },
//     {
//         title: 'Ma',
//         dataIndex: 'age',
//         defaultSortOrder: 'descend',
//         sorter: (a, b) => a.age - b.age,
//     },
//     {
//         title: 'Me',
//         dataIndex: 'Me'
//     },
//     {
//         title: 'S',
//         dataIndex: 'S'
//     },
//     {
//         title: 'K',
//         dataIndex: 'K'
//     },
//     {
//         title: 'GM',
//         dataIndex: 'GM'
//     },
//     {
//         title: 'GK',
//         dataIndex: 'GK'
//     },
//     {
//         title: 'Point',
//         dataIndex: 'Point'
//     },
// ];


// const datas = [
//     {
//         key: '1',
//         name: 'John Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//         tags: ['nice', 'developer'],
//     },
//     {
//         key: '2',
//         name: 'Jim Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//         tags: ['loser'],
//     },
//     {
//         key: '3',
//         name: 'Joe Black',
//         age: 32,
//         address: 'Sydney No. 1 Lake Park',
//         tags: ['cool', 'teacher'],
//     },
// ];





const onFinish = (values) => {

};
const onFinishFailed = (errorInfo) => {

};

const App = () => {
    //alret 


    const [messageApi, contextHolder] = message.useMessage();
    // input score
    const [nameA, setNameA] = useState();
    const [scoreA, setScoreA] = useState();

    const [nameB, setNameB] = useState();
    const [scoreB, setScoreB] = useState();

    const [klub, setKlub] = useState();
    const [kota, setKota] = useState();

    const onChangeNameA = (e) => {
        const nameA = e.target.value;
        setNameA(nameA);
    };
    const onChangeScoreA = (e) => {
        const scoreA = e.target.value;
        setScoreA(scoreA);
    };

    const onChangeNameB = (e) => {
        const nameB = e.target.value;
        setNameB(nameB);
    };
    const onChangeScoreB = (e) => {
        const scoreB = e.target.value;
        setScoreB(scoreB);
    };

    const onChangeKlub = (e) => {
        const klub = e.target.value;
        setKlub(klub);
    };
    const onChangeKota = (e) => {
        const kota = e.target.value;
        setKota(kota);
    };


    const inputscore = {
        klubA: nameA,
        scoreA: scoreA,
        klubB: nameB,
        scoreB: scoreB,
    };


    const inputklub = {
        name: klub,
        kota: kota,
    };
    // console.log(inputklub)

    useEffect(() => {

    });

    const sendklub = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:3000/klub',
            data: inputklub
        })
            .then(function (response) {
                console.log(response.data.status)
                if (response.data.status === 200) {
                    messageApi.open({
                        type: "succes",
                        content: "data berhasil di input",
                    })
                } else if (response.data.status === 422) {
                    messageApi.open({
                        type: "error",
                        content: "data gagal di input",
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    const sendscore = () => {
        if (scoreA > scoreB) {
            console.log("klub A menang dengan Score", scoreA, "mendapatkan point 3")
        } else if (scoreA < scoreB) {
            console.log("klub B menang dengan Score", scoreB, "kmendapatkan point 3")
        } else if (scoreA === scoreB) {
            console.log("seri dengan score ", scoreA, "-", scoreB, "masing masing mendapatkan point 1")
        }
        console.log("input score", inputscore)
    };
    //


    const get = [axios.get('http://localhost:3000/livescore/')
        .then(function (getdata) {
            console.log(getdata.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        })]








    return (
        <Watermark content={['Andre Fahrezi', 'Happy Working']}>
            <Layout className="layout">
                {contextHolder}
                <Header >Header</Header>

                <Content
                    style={{
                        padding: '0 50px',
                        height: 800,
                        maxHeight: 2500,
                        paddingTop: "30px",
                        paddingBottom: "70%",
                        justifyContent: "center"
                    }}
                >
                    <Row>
                        <Col span={8} offset={8} style={{ textAlign: "center" }}>
                            <Title> Input klub </Title>
                            <Card >
                                <Form
                                    name="basic"
                                    labelCol={{
                                        span: 8,
                                    }}
                                    wrapperCol={{
                                        span: 16,
                                    }}
                                    style={{
                                        maxWidth: 600,
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        label="nama"

                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your name klub!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            onChange={onChangeKlub} />
                                    </Form.Item>

                                    <Form.Item
                                        label="klub"

                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input kota',
                                            },
                                        ]}
                                    >
                                        <Input
                                            onChange={onChangeKota}
                                        />
                                    </Form.Item>



                                    <Form.Item
                                        wrapperCol={{
                                            offset: 8,
                                            span: 16,
                                        }}
                                    >
                                        <Button type="primary" htmlType="submit" onClick={sendklub}>
                                            input
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </Col>
                    </Row>

                    <Divider />

                    <Row>
                        <Col span={8} offset={8} style={{ textAlign: "center" }}>
                            <Title> Input Score </Title>
                            <Card >
                                <Form
                                    name="basic"
                                    labelCol={{
                                        span: 8,
                                    }}
                                    wrapperCol={{
                                        span: 24,
                                    }}
                                    style={{
                                        maxWidth: 600,
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        label="klubA"
                                        name="klubA"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Name klubA',
                                            },
                                        ]}
                                    >
                                        <Input
                                            onChange={onChangeNameA} />
                                    </Form.Item>

                                    <Form.Item
                                        label="scoreA"
                                        name="scoreA"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Score klub A',
                                            },
                                        ]}
                                    >
                                        <Input
                                            onChange={onChangeScoreA} />
                                    </Form.Item>

                                    <Form.Item
                                        label="klubB"
                                        name="klubB"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Name klubB',
                                            },
                                        ]}
                                    >
                                        <Input
                                            onChange={onChangeNameB} />
                                    </Form.Item>

                                    <Form.Item
                                        label="scoreB"
                                        name="scoreB"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Score klub B',
                                            },
                                        ]}
                                    >
                                        <Input
                                            onChange={onChangeScoreB} />
                                    </Form.Item>


                                    <Form.Item
                                        wrapperCol={{
                                            offset: 8,
                                            span: 16,
                                        }}
                                    >
                                        <Button type="primary" htmlType="submit" onClick={sendscore}>
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </Col>

                    </Row>

                    <Divider />

                    <Row>
                        <Col span={10} offset={7} style={{ textAlign: "center" }}>
                            <Card>
                                {/* <Table columns={columns} dataSource={data} key="index" /> */}
                                {/* {const data = []
                                get.map(menu => {
                                data.push({
                                    key: menu.id,
                                    name: menu.name,
                                    age: menu.s,
                                    mi: menu.gk,
                                })
                            })} */}

                                {get?.map((value) => {
                                    return (
                                        <Row key={value}>
                                            <Col span={2}>
                                                <Title level={5}>No</Title>
                                                <Title level={5}>1</Title>
                                            </Col>
                                            <Col span={2}>
                                                <Title level={5}>klub</Title>
                                            </Col>
                                            <Col span={2}>
                                                <Title level={5}>ma</Title>
                                            </Col>
                                            <Col span={2}>
                                                <Title level={5}>me</Title>
                                            </Col>
                                            <Col span={2}>
                                                <Title level={5}>s</Title>
                                            </Col>
                                            <Col span={2}>
                                                <Title level={5}>k</Title>
                                            </Col>
                                            <Col span={2}>
                                                <Title level={5}>gm</Title>
                                            </Col>
                                            <Col span={2}>
                                                <Title level={5}>gk</Title>
                                            </Col>
                                            <Col span={2}>
                                                <Title level={5}>Point</Title>
                                            </Col>
                                        </Row>
                                    )
                                }
                                )}



                            </Card>
                        </Col>
                    </Row>



                </Content>
                <Footer style={{ backgroundColor: "darkblue", textAlign: "center" }}>
                    <Title level={5} style={{ color: "white" }}> Footer</Title>
                </Footer>
            </Layout>
        </Watermark>
    );
};
export default App;