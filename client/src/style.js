import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        // borderRadius: 15,
        margin: '0 0 30px 0',
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      },
      heading: {
        color: '#DE1B1B',
        flexGrow:1,
        textAlign: "center",
        // margin: 'auto',
      },
      image: {
        // marginRight: '50px',
        marginLeft: '15px',
      },
      //react breakpoint jika kondisi layar mobile -> create jadi diatas
      [theme.breakpoints.down('sm')]:{
        mainContainer: {
          flexDirection:"column-reverse"
        },
      }
}))