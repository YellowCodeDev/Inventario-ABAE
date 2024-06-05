<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

Route::get("/", [HomeController::class, "index"])->name("home");
/*Route::get('/', function () {
    return view('welcome');
});*/
/*Route::get('/app', function () {
    return view('react-app');
});*/
