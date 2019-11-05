<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Java Techie Mail</title>
</head>

<body>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td align="center" valign="top"><br> <br>
      <table width="600" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td align="center" valign="top" bgcolor="white"
              style="background-color: white; border: black solid 1px; font-family: Arial, Helvetica, sans-serif; font-size: 13px; color: #000000; padding: 0px 15px 10px 15px;">

            <div style="font-size: 48px; color:blue;">
              <b>Planage</b>
              <p style="color: rebeccapurple; font-size: 20px">You Plan, We Manage!</p>
            </div>

            <div style="font-size: 24px; color: #555100;">
              <p>Hi ${subscriberEmail},<p>
                <br>
                This is invitation link from ${senderName}.Click below button to join now.<br>
            </div>
            <div>
              <a href="http://localhost:8080/api/v1/users/boards/invite?token=${emailToken}&boardId=${boardId}">
                <button
                        style="background-color: blue; font-size: 25px; color: white; width: 50%; height: 50px">
                  Click here
                </button></a>
            </div>
            <div>
              <br>"Sharing the knowledge is biggest learning" <br> <br>
              <br> <br> <b>Team Planage,</b><br>Bangalore, India<br>
              <br>
            </div>
          </td>
        </tr>
      </table> <br> <br></td>
  </tr>
</table>
</body>
</html>
