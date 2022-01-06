package com.%lc%PROJECT_NAME_LOWER_CASE%lc%;

import com.facebook.react.ReactActivity;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  };

  @Override
  protected String getMainComponentName() {
    return "%PROJECT_NAME%";
  }
}