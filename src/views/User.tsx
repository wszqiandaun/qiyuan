import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const FormDisabledDemo: React.FC = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{ maxWidth: 600 }}
      >
        
        <Form.Item label="昵称">
          <Input />
        </Form.Item>
        <Form.Item label="性别">
          <Radio.Group>
            <Radio value="boy"> 男 </Radio>
            <Radio value="girl"> 女 </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="出生日期">
          <DatePicker />
        </Form.Item>
        <Form.Item label="联系方式">
          <Input />
        </Form.Item>
        <Form.Item label="个性签名">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="上传头像" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button style={{ border: 0, background: 'none' }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
      </Form>
        <Button style={{marginLeft:'50px'}} onClick={(e) => setComponentDisabled(false)}>修改</Button>
        <Button style={{marginLeft:'50px'}} onClick={(e) => setComponentDisabled(true)}>提交</Button>
    </>
    
  );
};

export default () => <FormDisabledDemo />;