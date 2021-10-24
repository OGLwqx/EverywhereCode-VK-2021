import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Banner, SimpleCell, Card, Placeholder, ContentCard, CardGrid } from '@vkontakte/vkui';
import { Icon28Menu, Icon28MusicOutline, Icon16Replay, Icon24Coins, Icon24GiftOutline, Icon24User, Icon24UserSquareOutline, Icon56Users3Outline } from '@vkontakte/icons';

const Home = props => (
	<Panel id={props.id}>
		<PanelHeader>B3bra development</PanelHeader>
		<Div>
		<CardGrid size="l">
		<ContentCard
              subtitle="Кто такие b3bra development???"
              header="B3bra Dev - Мы создаем будущее"
              text='Молодая команда перспективных разработчиков, созданная специально для "Вездекод". Нюхнём смачной беброчки!'
            />
            </CardGrid>

            <Group
        		header={<Header>Наша команда</Header>}
      		>
            <Banner
        		before={<Avatar size={96} mode="image" src="https://sun9-19.userapi.com/impg/YiEUxlfoEWWtVM4UfdXecNAGoKzNukyP11Gf5w/tP0aq3XZntg.jpg?size=584x575&quality=96&sign=1667c29fa32cae0333dbbd7f8828199b&type=album" />}
        		header="Данил"
        		subheader="Fullstack разработчик. Лидер b3bra development"
        		actions={<Button onClick={() => props.openLink(`https://vk.com/danil_he`)}>ВКонтакте</Button>}
      		/>
      		<Banner
        		before={<Avatar size={96} mode="image" src="https://sun9-35.userapi.com/impg/m4TDMk5TroLOclVCT8snNpXJSKsClSYND5qvxw/LuSJysYFGDs.jpg?size=658x654&quality=96&sign=982626f2c06aae497c886a84c00c22bf&type=album" />}
        		header="Сергей"
        		subheader="Fullstack разработчик. Лидер крупнейшей (выдуманной) IT-Компании"
        		actions={<Button onClick={() => props.openLink(`https://vk.com/kolbasa2004`)}>ВКонтакте</Button>}
      		/>
      		</Group>
      		</Div>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
