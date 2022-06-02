const Header = props => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
      {/* <Image source={require('./image.png')} style={{height: 24, width: 24}} /> */}
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#a01b1b',
    height: 66,
    justifyContent: 'center',

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative',
    paddingTop: Platform.OS === 'ios' ? 25 : 0,
  },
  textStyle: {
    fontSize: 20,

    padding: 10,
  },
};

export default Header;
