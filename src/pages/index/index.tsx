import {Button, ConfigProvider} from "@nutui/nutui-react-taro";

export default function Index() {

  return (
    <ConfigProvider theme={{
      nutuiColorPrimary: '#1677ff',
      nutuiColorPrimaryStop1: '#1677ff',
      nutuiColorPrimaryStop2: '#1677ff',
    }}
    >
      <Button type='danger'>Danger</Button>
    </ConfigProvider>
  )
}
