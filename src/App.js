import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
  Epic, 
  View, 
  Root, 
  Tabbar, 
  ModalRoot, 
  TabbarItem, 
  ConfigProvider,
  AdaptivityProvider, 
  AppRoot,
  platform,
  VKCOM,
  Cell,
  SplitCol,
  PanelHeader,
  SplitLayout,
  Panel,
  Group,
  Div
} from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css';
import { 
  Icon28HomeOutline, 
  Icon28Profile,
  Icon28ComputerOutline,
  Icon28Users3Outline
} from '@vkontakte/icons';

import Home from './panels/Home';
import Persik from './panels/Persik';

class App extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      hasHeader: true,
      isDesktop: false,
      Platform: platform(),
      popout: null,
      activePanel: 'home',
    }

  }

  async componentDidMount() {

    let parsedUrl = new URL(window.location.href)
    if (parsedUrl.searchParams.get('vk_platform') === 'desktop_web') {
      this.setState({ 
        isDesktop: true,
        hasHeader: false,
        Platform: VKCOM
      })
    }
    if (parsedUrl.searchParams.get('vk_platform') === null) {
      this.setState({ 
        isDesktop: true,
        hasHeader: false,
        Platform: VKCOM
      })
    }
    console.log(parsedUrl.searchParams.get('vk_platform'))

    bridge.send("VKWebAppInit");
    bridge.send("VKWebAppGetUserInfo");
    bridge.subscribe(({ detail: { type, data }}) => {
      if (type === 'VKWebAppUpdateConfig') {
        const schemeAttribute = document.createAttribute('scheme');
        schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
        document.body.attributes.setNamedItem(schemeAttribute);
      }

      if (type === "VKWebAppGetUserInfoResult"){
        // const schemeAttribute = document.createAttribute('scheme');
        // schemeAttribute.value = 'space_gray';
        // document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
  }

	go = e => {

		this.setState({ activePanel: e.currentTarget.dataset.to })
		
	};

	render() {
    const { isDesktop, hasHeader, Platform } = this.state

	return (
		<ConfigProvider platform={Platform} isWebView={true}>
        <AdaptivityProvider>
          <AppRoot>
            <SplitLayout
              header={hasHeader && <PanelHeader separator={false} />}
              style={{ justifyContent: "center" }}
            >
              <SplitCol
                animate={!isDesktop}
                spaced={isDesktop}
                width={isDesktop ? '560px' : '100%'}
                maxWidth={isDesktop ? '560px' : '100%'}
              >   
                <Epic activeStory={this.state.activePanel} tabbar={ !isDesktop && 
                <Tabbar>
                  <TabbarItem
                    onClick={this.go}
                    data-to={'home'}
                    text='Главная'
                  ><Icon28ComputerOutline/></TabbarItem>
                  <TabbarItem
                    onClick={this.go}
                    data-to={'persik'}
                    text='Подробнее'
                  ><Icon28Users3Outline/></TabbarItem>
                </Tabbar>}>
                  <View id="home" activePanel="home" popout={this.state.popout}>
          <Home id='home' state={this.state} go={this.go}/>
          </View>
          <View id="persik" activePanel="persik" popout={this.state.popout}>
          <Persik id='persik' go={this.go} state={this.state} />
          </View>
                </Epic>
              </SplitCol>

              {isDesktop && (
                <Div>
                <SplitCol fixed width='280px' maxWidth='280px'>
                  <Panel id='menuDesktop'>
                    {hasHeader && <PanelHeader/>}
                    <Group>
                      <Cell
                        onClick={this.go}
                        data-to={'home'}
                        disabled={this.state.activePanel === 'home'}
                        before={<Icon28ComputerOutline/>}
                        style={ this.state.activePanel === 'home' ? {
                          backgroundColor: 'var(--button_secondary_background)',
                          borderRadius: 8
                        } : {}}
                      >
                        Главная
                      </Cell>
                      <Cell
                        onClick={this.go}
                        data-to={'persik'}
                        disabled={this.state.activePanel === 'persik'}
                        before={<Icon28Users3Outline/>}
                        style={ this.state.activePanel === 'persik' ? {
                          backgroundColor: 'var(--button_secondary_background)',
                          borderRadius: 8
                        } : {}}
                      >
                        Подробнее о b3bre
                      </Cell>
                    </Group>
                  </Panel>
                </SplitCol>
                </Div>
              )}
              
            </SplitLayout>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
	);

}
}

export default App;

