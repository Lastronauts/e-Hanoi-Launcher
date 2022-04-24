#![windows_subsystem = "windows"]

use anyhow::Result;
use std::process::Command;

fn main() -> Result<()> {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![launch_game])
        .run(tauri::generate_context!())?;

    Ok(())
}

#[tauri::command]
fn launch_game() -> Result<(), String> {
    let target = "./e-hanoi.exe";
    match Command::new(target).spawn() {
        Ok(_) => Ok(()),
        Err(err) => {
            let err_msg = format!(
                "Error: Could not launch e-Hanoi.\ndetails...{}\n指定されたファイル: {}",
                err, target
            );
            Err(err_msg)
        }
    }
}
