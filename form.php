<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "itum";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = "INSERT INTO personal_details (full_name, name_with_initial, nationality, gender, date_of_birth, address, email, mobile) 
VALUES('$_POST[fullName]','$_POST[initialName]', '$_POST[nationality]', '$_POST[gender]', '$_POST[birthDay]','$_POST[address]', '$_POST[email]', '$_POST[mobile]')";

$sql1 = "INSERT INTO attempt_one_result (full_name,year, physics, chemistry, maths, index_num, z_score, result_considered_year) 
VALUES('$_POST[fullName]','$_POST[a1_year]','$_POST[a1_physics]', '$_POST[a1_chem]', '$_POST[a1_maths]', '$_POST[a1_index]','$_POST[a1_z]', '$_POST[result_year]')";

$sql2 = "INSERT INTO attempt_two_result (full_name,year, physics, chemistry, maths, index_num, z_score, result_considered_year) 
VALUES('$_POST[fullName]','$_POST[a2_year]','$_POST[a2_physics]', '$_POST[a2_chem]', '$_POST[a2_maths]', '$_POST[a2_index]','$_POST[a2_z]', '$_POST[result_year]')";

$sql3 = "INSERT INTO attempt_three_result (full_name, year, physics, chemistry, maths, index_num, z_score, result_considered_year) 
VALUES('$_POST[fullName]','$_POST[a3_year]','$_POST[a3_physics]', '$_POST[a3_chem]', '$_POST[a3_maths]', '$_POST[a3_index]','$_POST[a3_z]', '$_POST[result_year]')";


$sql4 = "INSERT INTO test_and_marine (full_name,test_medium, choice_1, choice_2, priority_1, priority_2, reg_in_other_uni) 
VALUES('$_POST[fullName]','$_POST[medium]','$_POST[mf1]', '$_POST[mf2]','$_POST[set1]', '$_POST[set2]', '$_POST[other]')";

$sql5 = "INSERT INTO other (full_name, choice_1, choice_2, choice_3, choice_4, choice_5, choice_6, choice_7, choice_8) 
VALUES('$_POST[fullName]','$_POST[of1]', '$_POST[of2]','$_POST[of3]', '$_POST[of4]', '$_POST[of5]','$_POST[of6]', '$_POST[of7]', '$_POST[of8]')";


if ($conn->query($sql) === TRUE) {
    echo "New record created successfully <br>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

if ($conn->query($sql1) === TRUE) {
    echo "New record created successfully <br>";
} else {
    echo "Error: " . $sql1 . "<br>" . $conn->error;
}

if ($conn->query($sql2) === TRUE) {
    echo "New record created successfully <br>";
} else {
    echo "Error: " . $sql2 . "<br>" . $conn->error;
}

if ($conn->query($sql3) === TRUE) {
    echo "New record created successfully <br>";
} else {
    echo "Error: " . $sql3 . "<br>" . $conn->error;
}


if ($conn->query($sql4) === TRUE) {
    echo "New record created successfully <br>";
} else {
    echo "Error: " . $sql4 . "<br>" . $conn->error;
}

if ($conn->query($sql5) === TRUE) {
    echo "New record created successfully <br>";
} else {
    echo "Error: " . $sql5 . "<br>" . $conn->error;
}


if(isset($_POST["submit1"])){
	header('location:thanks.html');
}
$conn->close();
?>