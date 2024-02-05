import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Form,
  Input,
  Upload,
} from 'antd';
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 44 },
    sm: { span: 44 },
  },
};
const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

const App: React.FC = () => (
  <Form {...formItemLayout} variant="filled" style={{ maxWidth: 600 }}>
    <Form.Item label="请输入博客标题：" name="Input" rules={[{ required: true, message: 'Please input!' }]}>
      <Input />
    </Form.Item>

    <Form.Item
      label="请输入博客内容："
      name="TextArea"
      rules={[{ required: true, message: 'Please input!' }]}
    >
      <Input.TextArea style={{height:'350px',border:'1px solid black'}}/>
    </Form.Item>
    <Form.Item label="上传图片" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button style={{ border: 0, background: 'none' }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
      <Button type="primary" htmlType="submit">
        提交
      </Button>
    </Form.Item>
  </Form>
);

export default App;