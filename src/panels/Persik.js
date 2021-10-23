import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Banner, SimpleCell, Card, Placeholder } from '@vkontakte/vkui';
import { Icon28Menu, Icon28MusicOutline, Icon16Replay, Icon24Coins, Icon24GiftOutline, Icon24User, Icon24UserSquareOutline, Icon56Users3Outline, Icon56MentionOutline } from '@vkontakte/icons';

const Home = props => (
	<Panel id={props.id}>
		<PanelHeader>О b3bre</PanelHeader>
		<Group
        		header={<Header>Наша команда</Header>}
      		>
		<Div>
		<Card>
		<Placeholder
              icon={<Avatar size={96} src="https://sun9-19.userapi.com/impg/YiEUxlfoEWWtVM4UfdXecNAGoKzNukyP11Gf5w/tP0aq3XZntg.jpg?size=584x575&quality=96&sign=1667c29fa32cae0333dbbd7f8828199b&type=album" />}
              header="Данил"
            >
              Крайне ответственный и инициативный человек. Веб-разработка у него в крови, эта профессия передалась ему от отца, а тому в свою очередь от своего отца, а этому уже вроде как от матери. Обходит препятствия на пути к решению проблемы настолько хорошо, что боится как бы не обойти само решение проблемы.
            </Placeholder>
            </Card>
            </Div>
            <Div>
            <Card>
		<Placeholder
              icon={<Avatar size={96} src="https://sun9-35.userapi.com/impg/m4TDMk5TroLOclVCT8snNpXJSKsClSYND5qvxw/LuSJysYFGDs.jpg?size=658x654&quality=96&sign=982626f2c06aae497c886a84c00c22bf&type=album" />}
              header="Серёжа"
            >
              Ещё с раннего детства хотел сотворить что-то своё, что-то великое. К сожалению, в реальном мире для этого нужны большие средства, а виртуальный сайт, как ему казалось, сделать куда проще. Но вскоре обнаружелось что нужен напарник. Насмотревшись на успех выше описанного Данила (не путать с Даниилом) он решил связать свою жизнь с этой сферой (и немного даже с Данилом)
            </Placeholder>
            </Card>
            </Div>
            </Group>

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
