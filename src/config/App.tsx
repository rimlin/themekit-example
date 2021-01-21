import React, { useState } from "react";
import { compose } from "@bem-react/core";
import { Textinput } from "@yandex/ui/Textinput/desktop/bundle";
import {
	Button as ButtonDesktop,
	withSizeM as withSizeMButton,
	withViewAction,
	withViewPseudo as withViewPseudoButton,
	withViewClear as withViewClearButton,
} from "@yandex/ui/Button/desktop";
import { Tumbler as TumblerDesktop, withSizeM, withViewDefault } from "@yandex/ui/Tumbler/desktop";

import styles from "./index.module.styl";

const PseudoButton = compose(withSizeMButton, withViewPseudoButton)(ButtonDesktop);
const ClearButton = compose(withSizeMButton, withViewClearButton)(ButtonDesktop);
const SubmitButton = compose(withSizeMButton, withViewAction)(ButtonDesktop);
const Tumbler = compose(withSizeM, withViewDefault)(TumblerDesktop);

const App = () => {
	const [checked, setChecked] = useState(false);

	return (
		<form className={styles.root}>
			<Textinput size="m" view="default" name="startDate" type="date" placeholder="дд.мм.гггг" />
			<br />
			<br />
			<Tumbler checked={checked} onChange={() => setChecked(!checked)} view="default" size="m" />
			<SubmitButton view="action" size="m" type="submit">
				Запустить
			</SubmitButton>
			<PseudoButton view="pseudo" size="m">
				Отменить
			</PseudoButton>
			<ClearButton size="m">Сбросить</ClearButton>
		</form>
	);
};

export default App;
