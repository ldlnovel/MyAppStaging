import React from 'react'
import { Form, Button, Select, Input, Upload } from 'antd';


const FormItem = Form.Item;
const Option = Select.Option
const upDataBtn = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '5px'
}
const btn = {
  marginRight: '10px'
}
/**
 *  handleCancel  回调函数  取消 弹窗
 *  handleoK(fileList, fieldsValue) /// 回调 调接口
 *  listFrom ：[
 *    label: 标题名，  
 *    name: 回传参数名 ，
 *    type :  input  || select, 不传 默认 input，
 *    child:  为 select  时 option {name:显示中文，value: ‘id’ }，
 *    initialValue: 默认参数，
 *    required    默认为 true
 * ]
 *  */

class updataModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileList: [], /// 手动上传 文件列表
    }
  }

  handleUpdata = () => {
    let { fileList } = this.state
    const { handleoK = () => { } } = this.props
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      handleoK(fileList, fieldsValue)
    })
  }
  Cancel = () => {
    let { fileList } = this.state
    fileList.length = 0
    this.props.form.resetFields()
    this.setState({
      fileList
    })
    this.props.handleCancel()
  }
  render() {
    const { listFrom = [], loading } = this.props
    const { getFieldDecorator } = this.props.form;
    let { fileList } = this.state
    const upData = {
      action: '//jsonplaceholder.typicode.com/posts/',
      onRemove: (file) => {
        this.setState(({ fileList }) => {
          const index = fileList.indexOf(file);
          const newFileList = fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        this.setState(({ fileList }) => ({
          fileList: [...fileList, file],
        }));
        return false;
      },
      fileList: this.state.fileList,
    };
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 }
    };
    return (
      <Form
      // layout="inline"
      >
        {
          listFrom.map((item,key) => {
            return (
              <FormItem {...formItemLayout} key={item.value+key}
                label={item.label}
              >
                {getFieldDecorator(item.name, {
                  initialValue: item.initialValue ? item.initialValue : '',
                  rules: [
                    { required: item.required ? item.required : true, message: '必填', }
                  ]
                })(
                  (!item.type || item.type == 'input') ?
                    <Input style={{ width: 200 }} placeholder="请输入" key={item.name + '123'} />
                    :
                    <Select
                      style={{ width: 200 }}
                    >
                      {
                        item.child && item.child.map(op => {
                          return <Option value={op.value} key={item.value + '456'}>{op.name}</Option>
                        })
                      }

                    </Select>
                )}
              </FormItem>
            )
          })
        }
        <div>
          <FormItem {...formItemLayout}
            label={'文件'}
          >
            <Upload {...upData}>
              <Button type="primary" disabled={fileList.length == 1}>
                请选择文件
							</Button>
            </Upload>
          </FormItem>
        </div>
        <div style={upDataBtn}>
          <Button type='primary' onClick={this.handleUpdata} style={btn} loading={loading}>上传</Button>
          <Button onClick={this.Cancel} loading={loading}>取消</Button>
        </div>
      </Form>
    )
  }
}

export default Form.create()(updataModal)