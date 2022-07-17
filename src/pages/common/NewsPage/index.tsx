// React
import React, { useEffect, useState } from 'react';

// 组件
import { Avatar, List, Space, Skeleton, Button } from 'antd';
import { AiOutlineLike, AiOutlineMessage, AiOutlineStar } from 'react-icons/ai';
// 样式组件
import { NewsPageStyled } from './style';

interface DataType {
	gender?: string;
	name: {
		title?: string;
		first?: string;
		last?: string;
	};
	email?: string;
	picture: {
		large?: string;
		medium?: string;
		thumbnail?: string;
	};
	nat?: string;
	loading: boolean;
}

const count = 4;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
	<Space>
		{React.createElement(icon)}
		{text}
	</Space>
);

export default function NewsPage() {
	const [initLoading, setInitLoading] = useState(true);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<DataType[]>([]);
	const [list, setList] = useState<DataType[]>([]);

	useEffect(() => {
		fetch(fakeDataUrl)
			.then(res => res.json())
			.then(res => {
				setInitLoading(false);
				setData(res.results);
				setList(res.results);
			});
	}, []);

	const onLoadMore = () => {
		setLoading(true);
		setList(
			data.concat(
				[...new Array(count)].map(() => ({
					loading: true,
					name: {},
					picture: {},
				})),
			),
		);
		fetch(fakeDataUrl)
			.then(res => res.json())
			.then(res => {
				const newData = data.concat(res.results);
				setData(newData);
				setList(newData);
				setLoading(false);
				// Resetting window's offsetTop so as to display react-virtualized demo underfloor.
				// In real scene, you can using public method of react-virtualized:
				// https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
				window.dispatchEvent(new Event('resize'));
			});
	};

	const loadMore =
		!initLoading && !loading ? (
			<div
				style={{
					textAlign: 'center',
					marginTop: 12,
					height: 32,
					lineHeight: '32px',
				}}>
				<Button onClick={onLoadMore}>loading more</Button>
			</div>
		) : null;

	return (
		<NewsPageStyled>
			<List
				loading={initLoading}
				loadMore={loadMore}
				itemLayout="vertical"
				dataSource={list}
				renderItem={(item, idx) => (
					<List.Item
						key={idx}
						actions={[
							<IconText
								icon={AiOutlineStar}
								text="156"
								key="list-vertical-star-o"
							/>,
							<IconText
								icon={AiOutlineLike}
								text="156"
								key="list-vertical-like-o"
							/>,
							<IconText
								icon={AiOutlineMessage}
								text="2"
								key="list-vertical-message"
							/>,
						]}
						extra={
							<img
								width={272}
								alt="logo"
								src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
							/>
						}>
						<Skeleton avatar title={false} loading={item.loading} active>
							<List.Item.Meta
								avatar={<Avatar src={item.picture.large} />}
								title={
									<a href="https://github.com/Kainar010/pump">
										{item.name?.last}
									</a>
								}
								description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
							/>
						</Skeleton>
					</List.Item>
				)}
			/>
		</NewsPageStyled>
	);
}
