package com.example.trivia1

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Scaffold
import androidx.compose.material.Surface
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.trivia1.ui.theme.Trivia1Theme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            Trivia1Theme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colors.background
                ) {
                    Greeting()
                }
            }
        }
    }
}

@Composable
fun Greeting( ) {
  Box(modifier =  Modifier.background(color = Color.White)) {
      Column(
          horizontalAlignment = Alignment.CenterHorizontally,
          modifier = Modifier.fillMaxSize(),
          verticalArrangement = Arrangement.Center
      ) {
          Image(
              painter = painterResource(id = R.drawable.jetpack_compose_icon),
              contentDescription = "Jetpack Icon",
              modifier = Modifier.height(400.dp),
          )
          Text(
              text = "Lakshita sodhi",
              fontSize = 35.sp, fontWeight = FontWeight.Bold,
              color = Color(56, 112, 179, 255)
          )
          Text(text = "❤️", fontSize = 50.sp)
          Text(
              text = "Jetpack Compose", color = Color(8, 48, 66, 255,),
              fontWeight = FontWeight.Bold, fontSize = 40.sp
          )


      }
  }


}

@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    Trivia1Theme {
        Greeting()
    }
}