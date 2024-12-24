// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-gray; icon-glyph: blind;
let config = {
    "AppName": "FreeFireTH",
    "Device": "iPhone 12",
    "OS_Version": "15.5",
    "AppVersion": "1.67.0",
    "AIMLOCK": {
        "Precision": "Alta",
        "Range": "Corto y Largo",
        "Delay": "0.00082 tapshoot",
        "Sensitivity": "0x0000078195, 0x0000008293, 0x0000007291"
    },
    "AdditionalConfig": {
        'NO_RECOIL_OB40_gun_M1887_0': true,
        'NO_RECOIL_OB40_gun_M1887-X_0': true,
        'NO_RECOIL_OB40_gun_SPAS12_0': true,
        'NO_RECOIL_OB40_gun_M1014_0': true,
        'NO_RECOIL_OB40_gun_MAG-7_0': true,
        'NO_RECOIL_OB40_gun_CHARGEBUSTER_0': true,
        'NO_RECOIL_OB40_gun_TROGON_0': true,
        'NO_RECOIL_OB40_gun_UMP_0': true,
        'NO_RECOIL_OB40_gun_MP5_0': true,
        'NO_RECOIL_OB40_gun_VSS_0': true,
        'NO_RECOIL_OB40_gun_MP40_0': true,
        'NO_RECOIL_OB40_gun_P90_0': true,
        'NO_RECOIL_OB40_gun_CG15_0': true,
        'NO_RECOIL_OB40_gun_THOMPSON_0': true,
        'NO_RECOIL_OB40_gun_BIZON_0': true,
        'NO_RECOIL_OB40_gun_VECTOR_0': true,
        'NO_RECOIL_OB40_gun_MAC10_0': true
    },
    "NewContent": `
true,female_dtscollider.34G0c7XFIY72oWSp29emBYg4NWY~3D UnityFS5.x.x2018.4.11f1Â£Â©️[[@Â£Â£@Â£CAB-1f2fab14dc0abe133b364b19b6dd5d610Ã¡Â£12018.4.11f1 sÃ¿Ã¿Ã´nÂŽ0Ã¬Ã‚Â“I?Â«'BÃ®️#Ã§Â€7Â€Ã¿Ã¿Ã¿Ã¿Â€HÂ€Ã¿Ã¿Ã¿Ã¿Â€@ÃžÂ€Â€QÂ€jÂ€HÂ€Ã€Ã¿Ã¿Ã¿Ã¿Â€1Â€1Â€Ã¿Ã¿Ã¿Ã¿@ÃžÂ€Â€A
jÂ€
A$Â€
AÃžÂ€$A.Â€-AÂ¦Â€6HÂ€Â«Â€Ã¿Ã¿Ã¿Ã¿  Â€1Â€1Â€Ã¿Ã¿Ã¿Ã¿ @ÃžÂ€Â€
QÂ€jÂ€
Â‹Â€> LÂ€Dm_ComponentComponentPaircomponentm_FileIDm_PathIDm_Layerm_Tagm_IsActiverGÂ¿ÃßÃº3w
Â¸Ã­-Â›Ã†Ã…GÃÃ…1Ãœ]ÂŒKÂ²Q{Âš&Â©️Ã®️Â
Â€7Â€Ã¿Ã¿Ã¿Ã¿Â€4Â€vÂ€
AÃžÂ€A.Â€ AÂ Â€]Â€AhÂ€ÃªÂ€
ÃžÂ€Â€.Â€ Â€HÂ€Â«Â€Ã¿Ã¿Ã¿Ã¿Â€1Â€1Â€Ã¿Ã¿Ã¿Ã¿ @ÃžÂ€Â€ QÂ€jÂ€
)Â¢
Â€>K Â€Â Â€XAdrÂ€ÃžÂ€Â€ÃžÂ€ÂÃžÂ€Â›ÃžÂ€Â§Â Â€Â³AÃžÂ€Ã…Ã˜Ã¨dÂ€ÃžÂ€Ã¸ÃžÂ€ÃžÂ€ ÃžÂ€ÃžÂ€ Ã¥Â€*
 Â¡Â€0 Â¡Â€2 Â¡Â€4 Ã¥Â€ÃŒ8AÃ™️Ãª9Â€Â Â€Ã»:AÂ Â€;A
"
<�ÃžÂ€=Â€.Â€ >Â€Â Â€+?A9K@Â€Â¡Â€]AÂ¡Â€bBÂ¡Â€gCÂ Â€sDAÂ Â€EAÃžÂ€ÂŠFÃžÂ€Â˜GÂ Â€Â¯HAÂ Â€ÃŒIAÂ Â€Â¸JAHÂ€ÃŠÃ¿Ã¿Ã¿Ã¿KÂ€1Â€1Â€Ã¿Ã¿Ã¿Ã¿L@ÃžÂ€Â€MQÂ€jÂ€NÃ–Â¢OÂ€>KPÂ€Â Â€XQAdrRÂ€ÃžÂ€Â€SÃžÂ€ÂTÃžÂ€Â›UÃ
    `
};

// Función principal
async function main() {
    // Aquí puedes añadir lógica adicional si es necesario, por ahora solo abrimos la app
    // Intentar abrir Free Fire
    let url = "freefire://";
    Safari.open(url);

    // Enviar notificación de AIMLOCK activado
    let notification = new Notification();
    notification.title = "𝙓𝙔𝙈𝙁𝙍𝙀𝙀𝙎𝙏𝙔𝙇𝙀𝙑𝙄𝙋 𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊";
    notification.body = " 𝙓𝙔𝙈𝙁𝙍𝙀𝙀𝙎𝙏𝙔𝙇𝙀𝙑𝙄𝙋 𝙀𝙅𝙀𝘾𝙐𝙏Á𝙉𝘿𝙊𝙎𝙀 𝙀𝙉 𝙀𝙇 𝙎𝙄𝙎𝙏𝙀𝙈𝘼 𝘼𝙋𝙋𝙇𝙀.";
    await notification.schedule();
}

// Ejecutar la función principal
main();
