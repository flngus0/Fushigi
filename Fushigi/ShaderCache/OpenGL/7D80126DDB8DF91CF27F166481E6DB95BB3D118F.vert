#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (location = 0) in vec4 in_attr0;
layout (location = 8) in vec4 in_attr8;
layout (location = 12) in vec4 in_attr12;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;


void main()
{
    precise float temp_0;
    precise float temp_1;
    int temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    int temp_6;
    int temp_7;
    uint temp_8;
    uint temp_9;
    int temp_10;
    precise float temp_11;
    int temp_12;
    uint temp_13;
    int temp_14;
    precise float temp_15;
    int temp_16;
    uint temp_17;
    uint temp_18;
    int temp_19;
    precise float temp_20;
    int temp_21;
    uint temp_22;
    int temp_23;
    precise float temp_24;
    int temp_25;
    uint temp_26;
    uint temp_27;
    int temp_28;
    precise float temp_29;
    int temp_30;
    uint temp_31;
    uint temp_32;
    int temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0xEFD87F800807FF06 Ald
    temp_0 = in_attr0.x;
    // 0x000010: 0x4CB0119002371A00 F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000018: 0xEFD87F800847FF0B Ald
    temp_3 = in_attr0.y;
    // 0x000028: 0xEFD87F800887FF0E Ald
    temp_4 = in_attr0.z;
    // 0x000030: 0xEFD87F8014C7FF0D Ald
    temp_5 = in_attr12.w;
    // 0x000038: 0x3848000000470007 Shl
    temp_6 = temp_2 << 4;
    // 0x000048: 0xEF95007068070700 Ldc
    temp_7 = temp_6 + 0x680;
    temp_8 = uint(temp_7) >> 2;
    temp_9 = temp_8 >> 2;
    temp_10 = int(temp_8) & 3;
    temp_11 = vp_c7.data[int(temp_9)][temp_10];
    temp_12 = int(temp_8) + 1;
    temp_13 = uint(temp_12) >> 2;
    temp_14 = temp_12 & 3;
    temp_15 = vp_c7.data[int(temp_13)][temp_14];
    // 0x000050: 0xEF95007048070702 Ldc
    temp_16 = temp_6 + 0x480;
    temp_17 = uint(temp_16) >> 2;
    temp_18 = temp_17 >> 2;
    temp_19 = int(temp_17) & 3;
    temp_20 = vp_c7.data[int(temp_18)][temp_19];
    temp_21 = int(temp_17) + 1;
    temp_22 = uint(temp_21) >> 2;
    temp_23 = temp_21 & 3;
    temp_24 = vp_c7.data[int(temp_22)][temp_23];
    // 0x000058: 0xEF94007068870709 Ldc
    temp_25 = temp_6 + 0x688;
    temp_26 = uint(temp_25) >> 2;
    temp_27 = temp_26 >> 2;
    temp_28 = int(temp_26) & 3;
    temp_29 = vp_c7.data[int(temp_27)][temp_28];
    // 0x000068: 0xEF9400704887070A Ldc
    temp_30 = temp_6 + 0x488;
    temp_31 = uint(temp_30) >> 2;
    temp_32 = temp_31 >> 2;
    temp_33 = int(temp_31) & 3;
    temp_34 = vp_c7.data[int(temp_32)][temp_33];
    // 0x000070: 0x4C68101000070604 Fmul
    temp_35 = temp_0 * vp_c4.data[0].x;
    // 0x000078: 0x4C68101000470605 Fmul
    temp_36 = temp_0 * vp_c4.data[1].x;
    // 0x000088: 0x4C68101000870606 Fmul
    temp_37 = temp_0 * vp_c4.data[2].x;
    // 0x000090: 0x49A0021000170B04 Ffma
    temp_38 = fma(temp_3, vp_c4.data[0].y, temp_35);
    // 0x000098: 0x49A0029000570B05 Ffma
    temp_39 = fma(temp_3, vp_c4.data[1].y, temp_36);
    // 0x0000A8: 0x49A0031000970B08 Ffma
    temp_40 = fma(temp_3, vp_c4.data[2].y, temp_37);
    // 0x0000B0: 0x49A0021000270E04 Ffma
    temp_41 = fma(temp_4, vp_c4.data[0].z, temp_38);
    // 0x0000B8: 0x49A0029000670E06 Ffma
    temp_42 = fma(temp_4, vp_c4.data[1].z, temp_39);
    // 0x0000C8: 0x49A0041000A70E08 Ffma
    temp_43 = fma(temp_4, vp_c4.data[2].z, temp_40);
    // 0x0000D0: 0x4C9807940037000E Mov
    // 0x0000D8: 0x4C58101000370405 Fadd
    temp_44 = temp_41 + vp_c4.data[0].w;
    // 0x0000E8: 0xEFD87F801047FF04 Ald
    temp_45 = in_attr8.y;
    // 0x0000F0: 0x4C58101000770606 Fadd
    temp_46 = temp_42 + vp_c4.data[1].w;
    // 0x0000F8: 0x4C58101000B70808 Fadd
    temp_47 = temp_43 + vp_c4.data[2].w;
    // 0x000108: 0x59A0000000270502 Ffma
    temp_48 = fma(temp_44, temp_20, temp_11);
    // 0x000110: 0xEFD87F801007FF00 Ald
    temp_49 = in_attr8.x;
    // 0x000118: 0x59A0008000370603 Ffma
    temp_50 = fma(temp_46, temp_24, temp_15);
    // 0x000128: 0xEFF07F8008C7FF0D Ast
    out_attr0.w = temp_5;
    // 0x000130: 0x59A0048000A70801 Ffma
    temp_51 = fma(temp_47, temp_34, temp_29);
    // 0x000138: 0x4C68100C00070206 Fmul
    temp_52 = temp_48 * vp_c3.data[0].x;
    // 0x000148: 0x4C68100C00470205 Fmul
    temp_53 = temp_48 * vp_c3.data[1].x;
    // 0x000150: 0x4C68100C00870208 Fmul
    temp_54 = temp_48 * vp_c3.data[2].x;
    // 0x000158: 0x4C98079400B70009 Mov
    // 0x000168: 0x4C9807940027000A Mov
    // 0x000170: 0x4C58101002070102 Fadd
    temp_55 = temp_51 + vp_c4.data[8].x;
    // 0x000178: 0x49A0030C00170307 Ffma
    temp_56 = fma(temp_50, vp_c3.data[0].y, temp_52);
    // 0x000188: 0x4C98079400A70006 Mov
    // 0x000190: 0x49A0028C00570305 Ffma
    temp_57 = fma(temp_50, vp_c3.data[1].y, temp_53);
    // 0x000198: 0x49A0040C00970308 Ffma
    temp_58 = fma(temp_50, vp_c3.data[2].y, temp_54);
    // 0x0001A8: 0x49A0038C00270207 Ffma
    temp_59 = fma(temp_55, vp_c3.data[0].z, temp_56);
    // 0x0001B0: 0x51A0031400C70403 Ffma
    temp_60 = fma(temp_45, vp_c5.data[2].z, vp_c5.data[3].x);
    // 0x0001B8: 0x51A0049400D70406 Ffma
    temp_61 = fma(temp_45, vp_c5.data[2].w, vp_c5.data[3].y);
    // 0x0001C8: 0x49A0028C00670205 Ffma
    temp_62 = fma(temp_55, vp_c3.data[1].z, temp_57);
    // 0x0001D0: 0x51A0051400470409 Ffma
    temp_63 = fma(temp_45, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x0001D8: 0x51A007140057040A Ffma
    temp_64 = fma(temp_45, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x0001E8: 0x4C58100C00370707 Fadd
    temp_65 = temp_59 + vp_c3.data[0].w;
    // 0x0001F0: 0x49A001940087000B Ffma
    temp_66 = fma(temp_49, vp_c5.data[2].x, temp_60);
    // 0x0001F8: 0x49A003140097000C Ffma
    temp_67 = fma(temp_49, vp_c5.data[2].y, temp_61);
    // 0x000208: 0xEFF07F800A87FF0B Ast
    out_attr2.z = temp_66;
    // 0x000210: 0x4C68100C02870703 Fmul
    temp_68 = temp_65 * vp_c3.data[10].x;
    // 0x000218: 0xEFF07F800AC7FF0C Ast
    out_attr2.w = temp_67;
    // 0x000228: 0x4C68100C02470704 Fmul
    temp_69 = temp_65 * vp_c3.data[9].x;
    // 0x000230: 0x4C68100C02070706 Fmul
    temp_70 = temp_65 * vp_c3.data[8].x;
    // 0x000238: 0x49A0040C00A70202 Ffma
    temp_71 = fma(temp_55, vp_c3.data[2].z, temp_58);
    // 0x000248: 0x4C58100C00770505 Fadd
    temp_72 = temp_62 + vp_c3.data[1].w;
    // 0x000250: 0x4C68100C01C70707 Fmul
    temp_73 = temp_65 * vp_c3.data[7].x;
    // 0x000258: 0x49A0049400070009 Ffma
    temp_74 = fma(temp_49, vp_c5.data[0].x, temp_63);
    // 0x000268: 0x49A005140017000A Ffma
    temp_75 = fma(temp_49, vp_c5.data[0].y, temp_64);
    // 0x000270: 0xEFF07F800A07FF09 Ast
    out_attr2.x = temp_74;
    // 0x000278: 0x4C58100C00B70202 Fadd
    temp_76 = temp_71 + vp_c3.data[2].w;
    // 0x000288: 0xEFF07F800A47FF0A Ast
    out_attr2.y = temp_75;
    // 0x000290: 0x49A0018C02970503 Ffma
    temp_77 = fma(temp_72, vp_c3.data[10].y, temp_68);
    // 0x000298: 0x49A0020C02570504 Ffma
    temp_78 = fma(temp_72, vp_c3.data[9].y, temp_69);
    // 0x0002A8: 0x49A0030C02170500 Ffma
    temp_79 = fma(temp_72, vp_c3.data[8].y, temp_70);
    // 0x0002B0: 0x49A0038C01D70507 Ffma
    temp_80 = fma(temp_72, vp_c3.data[7].y, temp_73);
    // 0x0002B8: 0x49A0040C00A70101 Ffma
    temp_81 = fma(temp_51, vp_c3.data[2].z, temp_58);
    // 0x0002C8: 0x49A0018C02A70203 Ffma
    temp_82 = fma(temp_76, vp_c3.data[10].z, temp_77);
    // 0x0002D0: 0x49A0020C02670204 Ffma
    temp_83 = fma(temp_76, vp_c3.data[9].z, temp_78);
    // 0x0002D8: 0x49A0000C02270200 Ffma
    temp_84 = fma(temp_76, vp_c3.data[8].z, temp_79);
    // 0x0002E8: 0x49A0038C01E70207 Ffma
    temp_85 = fma(temp_76, vp_c3.data[7].z, temp_80);
    // 0x0002F0: 0x4C58100C00B70101 Fadd
    temp_86 = temp_81 + vp_c3.data[2].w;
    // 0x0002F8: 0x4C58100C02B70303 Fadd
    temp_87 = temp_82 + vp_c3.data[10].w;
    // 0x000308: 0xEFF07F800987FF01 Ast
    out_attr1.z = temp_86;
    // 0x000310: 0x4C58100C02770404 Fadd
    temp_88 = temp_83 + vp_c3.data[9].w;
    // 0x000318: 0xEFF07F8007C7FF03 Ast
    gl_Position.w = temp_87;
    // 0x000328: 0x4C58100C02370000 Fadd
    temp_89 = temp_84 + vp_c3.data[8].w;
    // 0x000330: 0xEFF07F800787FF04 Ast
    gl_Position.z = temp_88;
    // 0x000338: 0x4C58100C01F70707 Fadd
    temp_90 = temp_85 + vp_c3.data[7].w;
    // 0x000348: 0xEFF07F800747FF00 Ast
    gl_Position.y = temp_89;
    // 0x000350: 0xEFF07F800707FF07 Ast
    gl_Position.x = temp_90;
    // 0x000358: 0xE30000000007000F Exit
    return;
}
