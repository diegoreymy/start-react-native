import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default class BarHeader extends React.Component {
  _goBack = () => console.log('Volver');

  _onSearch = () => console.log('Buscando');

  _onMore = () => console.log('Opciones');

  render() {
    return (
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={this._onMenu} />
        <Appbar.Content
          title="Titulo"
        />
      </Appbar.Header>
    );
  }
}
