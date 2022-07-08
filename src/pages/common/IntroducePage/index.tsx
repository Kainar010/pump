import { favicon } from '@/assets/image';
import { IntroduceStyledBox } from './style';

export default function IntroducePage() {
	return (
		<IntroduceStyledBox>
			<img src={favicon} alt="Logo" className="logo" />

			<h1>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ducimus
				qui nobis veritatis culpa quas iste harum molestiae, minima temporibus
				facilis odio officiis a delectus vero accusantium neque, saepe sit!
			</h1>
		</IntroduceStyledBox>
	);
}
