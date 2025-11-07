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
    precise float temp_6;
    precise float temp_7;
    int temp_8;
    precise float temp_9;
    int temp_10;
    uint temp_11;
    uint temp_12;
    int temp_13;
    precise float temp_14;
    int temp_15;
    uint temp_16;
    int temp_17;
    precise float temp_18;
    int temp_19;
    uint temp_20;
    uint temp_21;
    int temp_22;
    precise float temp_23;
    int temp_24;
    uint temp_25;
    int temp_26;
    precise float temp_27;
    int temp_28;
    uint temp_29;
    uint temp_30;
    int temp_31;
    precise float temp_32;
    int temp_33;
    uint temp_34;
    uint temp_35;
    int temp_36;
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
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x0103F8000007F00E Mov32i
    // 0x000010: 0xEFD87F800807FF05 Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4CB0119002371A00 F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000028: 0xEFD87F800847FF07 Ald
    temp_3 = in_attr0.y;
    // 0x000030: 0x4C58101002A70E0C Fadd
    temp_4 = 1.0 + vp_c4.data[10].z;
    // 0x000038: 0xEFD87F800887FF0B Ald
    temp_5 = in_attr0.z;
    // 0x000048: 0x4C58101002B70E0E Fadd
    temp_6 = 1.0 + vp_c4.data[10].w;
    // 0x000050: 0x5080000000470C0C Mufu
    temp_7 = 1.0 / temp_4;
    // 0x000058: 0x3848000000470008 Shl
    temp_8 = temp_2 << 4;
    // 0x000068: 0x5080000000470E0E Mufu
    temp_9 = 1.0 / temp_6;
    // 0x000070: 0xEF95007048070802 Ldc
    temp_10 = temp_8 + 0x480;
    temp_11 = uint(temp_10) >> 2;
    temp_12 = temp_11 >> 2;
    temp_13 = int(temp_11) & 3;
    temp_14 = vp_c7.data[int(temp_12)][temp_13];
    temp_15 = int(temp_11) + 1;
    temp_16 = uint(temp_15) >> 2;
    temp_17 = temp_15 & 3;
    temp_18 = vp_c7.data[int(temp_16)][temp_17];
    // 0x000078: 0xEF95007068070800 Ldc
    temp_19 = temp_8 + 0x680;
    temp_20 = uint(temp_19) >> 2;
    temp_21 = temp_20 >> 2;
    temp_22 = int(temp_20) & 3;
    temp_23 = vp_c7.data[int(temp_21)][temp_22];
    temp_24 = int(temp_20) + 1;
    temp_25 = uint(temp_24) >> 2;
    temp_26 = temp_24 & 3;
    temp_27 = vp_c7.data[int(temp_25)][temp_26];
    // 0x000088: 0xEF94007048870809 Ldc
    temp_28 = temp_8 + 0x488;
    temp_29 = uint(temp_28) >> 2;
    temp_30 = temp_29 >> 2;
    temp_31 = int(temp_29) & 3;
    temp_32 = vp_c7.data[int(temp_30)][temp_31];
    // 0x000090: 0xEF9400706887080A Ldc
    temp_33 = temp_8 + 0x688;
    temp_34 = uint(temp_33) >> 2;
    temp_35 = temp_34 >> 2;
    temp_36 = int(temp_34) & 3;
    temp_37 = vp_c7.data[int(temp_35)][temp_36];
    // 0x000098: 0x4C68101000070504 Fmul
    temp_38 = temp_0 * vp_c4.data[0].x;
    // 0x0000A8: 0x4C68101000870506 Fmul
    temp_39 = temp_0 * vp_c4.data[2].x;
    // 0x0000B0: 0x4C68101000470505 Fmul
    temp_40 = temp_0 * vp_c4.data[1].x;
    // 0x0000B8: 0x49A0021000170704 Ffma
    temp_41 = fma(temp_3, vp_c4.data[0].y, temp_38);
    // 0x0000C8: 0x49A0031000970706 Ffma
    temp_42 = fma(temp_3, vp_c4.data[2].y, temp_39);
    // 0x0000D0: 0x49A0029000570705 Ffma
    temp_43 = fma(temp_3, vp_c4.data[1].y, temp_40);
    // 0x0000D8: 0x49A0021000270B04 Ffma
    temp_44 = fma(temp_5, vp_c4.data[0].z, temp_41);
    // 0x0000E8: 0x5080000000470210 Mufu
    temp_45 = 1.0 / temp_14;
    // 0x0000F0: 0x49A0031000A70B07 Ffma
    temp_46 = fma(temp_5, vp_c4.data[2].z, temp_42);
    // 0x0000F8: 0x49A0029000670B06 Ffma
    temp_47 = fma(temp_5, vp_c4.data[1].z, temp_43);
    // 0x000108: 0x4C58101000370405 Fadd
    temp_48 = temp_44 + vp_c4.data[0].w;
    // 0x000110: 0xEFD87F801407FF04 Ald
    temp_49 = in_attr12.x;
    // 0x000118: 0x4C58101000B70707 Fadd
    temp_50 = temp_46 + vp_c4.data[2].w;
    // 0x000128: 0x4C58101000770608 Fadd
    temp_51 = temp_47 + vp_c4.data[1].w;
    // 0x000130: 0x59A000000027050B Ffma
    temp_52 = fma(temp_48, temp_14, temp_23);
    // 0x000138: 0xEFD87F801447FF05 Ald
    temp_53 = in_attr12.y;
    // 0x000148: 0x59A0050000970706 Ffma
    temp_54 = fma(temp_50, temp_32, temp_37);
    // 0x000150: 0xEFD87F801487FF07 Ald
    temp_55 = in_attr12.z;
    // 0x000158: 0x59A0008000370808 Ffma
    temp_56 = fma(temp_51, temp_18, temp_27);
    // 0x000168: 0x5080000000470303 Mufu
    temp_57 = 1.0 / temp_18;
    // 0x000170: 0x4C68100C00070B0A Fmul
    temp_58 = temp_52 * vp_c3.data[0].x;
    // 0x000178: 0x4C68100C00470B0D Fmul
    temp_59 = temp_52 * vp_c3.data[1].x;
    // 0x000188: 0x5C59100000B7000F Fadd
    temp_60 = 0.0 - temp_23;
    temp_61 = temp_60 + temp_52;
    // 0x000190: 0xEFD87F8014C7FF00 Ald
    temp_62 = in_attr12.w;
    // 0x000198: 0x4C68100C00870B0B Fmul
    temp_63 = temp_52 * vp_c3.data[2].x;
    // 0x0001A8: 0x4C58101002070609 Fadd
    temp_64 = temp_54 + vp_c4.data[8].x;
    // 0x0001B0: 0xEFF07F800807FF04 Ast
    out_attr0.x = temp_49;
    // 0x0001B8: 0x49A0050C0017080A Ffma
    temp_65 = fma(temp_56, vp_c3.data[0].y, temp_58);
    // 0x0001C8: 0xEFF07F800847FF05 Ast
    out_attr0.y = temp_53;
    // 0x0001D0: 0x5C59100000870101 Fadd
    temp_66 = 0.0 - temp_27;
    temp_67 = temp_66 + temp_56;
    // 0x0001D8: 0xEFF07F800887FF07 Ast
    out_attr0.z = temp_55;
    // 0x0001E8: 0x49A0068C00570802 Ffma
    temp_68 = fma(temp_56, vp_c3.data[1].y, temp_59);
    // 0x0001F0: 0xEFF07F8008C7FF00 Ast
    out_attr0.w = temp_62;
    // 0x0001F8: 0x49A0050C0027090A Ffma
    temp_69 = fma(temp_64, vp_c3.data[0].z, temp_65);
    // 0x000208: 0x51A2019002970101 Ffma
    temp_70 = 0.0 - vp_c4.data[10].y;
    temp_71 = fma(temp_67, temp_57, temp_70);
    // 0x000210: 0x49A0058C0097080B Ffma
    temp_72 = fma(temp_56, vp_c3.data[2].y, temp_63);
    // 0x000218: 0x4C98079400270003 Mov
    // 0x000228: 0x51A2081002870F0F Ffma
    temp_73 = 0.0 - vp_c4.data[10].x;
    temp_74 = fma(temp_61, temp_45, temp_73);
    // 0x000230: 0x49A0010C00670902 Ffma
    temp_75 = fma(temp_64, vp_c3.data[1].z, temp_68);
    // 0x000238: 0x4C58100C00370A0A Fadd
    temp_76 = temp_69 + vp_c3.data[0].w;
    // 0x000248: 0x5C68100000E7010E Fmul
    temp_77 = temp_71 * temp_9;
    // 0x000250: 0x49A0058C00A70909 Ffma
    temp_78 = fma(temp_64, vp_c3.data[2].z, temp_72);
    // 0x000258: 0x49A0058C00A7060B Ffma
    temp_79 = fma(temp_54, vp_c3.data[2].z, temp_72);
    // 0x000268: 0x4C98079400370008 Mov
    // 0x000270: 0x4C58100C00770202 Fadd
    temp_80 = temp_75 + vp_c3.data[1].w;
    // 0x000278: 0x4C68100C02870A01 Fmul
    temp_81 = temp_76 * vp_c3.data[10].x;
    // 0x000288: 0x51A1019400470E06 Ffma
    temp_82 = 0.0 - vp_c5.data[0].z;
    temp_83 = fma(temp_77, temp_82, vp_c5.data[1].x);
    // 0x000290: 0x4C68100C02470A04 Fmul
    temp_84 = temp_76 * vp_c3.data[9].x;
    // 0x000298: 0x4C68100C02070A05 Fmul
    temp_85 = temp_76 * vp_c3.data[8].x;
    // 0x0002A8: 0x4C58100C00B70909 Fadd
    temp_86 = temp_78 + vp_c3.data[2].w;
    // 0x0002B0: 0x5C68100000C70F0C Fmul
    temp_87 = temp_74 * temp_7;
    // 0x0002B8: 0x49A0008C02970203 Ffma
    temp_88 = fma(temp_80, vp_c3.data[10].y, temp_81);
    // 0x0002C8: 0x4C68100C01C70A01 Fmul
    temp_89 = temp_76 * vp_c3.data[7].x;
    // 0x0002D0: 0x49A0020C02570204 Ffma
    temp_90 = fma(temp_80, vp_c3.data[9].y, temp_84);
    // 0x0002D8: 0x51A1041400570E0E Ffma
    temp_91 = 0.0 - vp_c5.data[0].w;
    temp_92 = fma(temp_77, temp_91, vp_c5.data[1].y);
    // 0x0002E8: 0x4C58100C00B70B0B Fadd
    temp_93 = temp_79 + vp_c3.data[2].w;
    // 0x0002F0: 0x49A0031400070C06 Ffma
    temp_94 = fma(temp_87, vp_c5.data[0].x, temp_83);
    // 0x0002F8: 0xEFF07F800987FF0B Ast
    out_attr1.z = temp_93;
    // 0x000308: 0x49A0008C01D70200 Ffma
    temp_95 = fma(temp_80, vp_c3.data[7].y, temp_89);
    // 0x000310: 0xEFF07F800A07FF06 Ast
    out_attr2.x = temp_94;
    // 0x000318: 0x49A0028C02170202 Ffma
    temp_96 = fma(temp_80, vp_c3.data[8].y, temp_85);
    // 0x000328: 0x49A0018C02A70903 Ffma
    temp_97 = fma(temp_86, vp_c3.data[10].z, temp_88);
    // 0x000330: 0x49A0020C02670904 Ffma
    temp_98 = fma(temp_86, vp_c3.data[9].z, temp_90);
    // 0x000338: 0x49A0071400170C0E Ffma
    temp_99 = fma(temp_87, vp_c5.data[0].y, temp_92);
    // 0x000348: 0x49A0000C01E70900 Ffma
    temp_100 = fma(temp_86, vp_c3.data[7].z, temp_95);
    // 0x000350: 0xEFF07F800A47FF0E Ast
    out_attr2.y = temp_99;
    // 0x000358: 0x49A0010C02270902 Ffma
    temp_101 = fma(temp_86, vp_c3.data[8].z, temp_96);
    // 0x000368: 0x4C58100C02B70303 Fadd
    temp_102 = temp_97 + vp_c3.data[10].w;
    // 0x000370: 0x4C58100C02770404 Fadd
    temp_103 = temp_98 + vp_c3.data[9].w;
    // 0x000378: 0xEFF07F8007C7FF03 Ast
    gl_Position.w = temp_102;
    // 0x000388: 0x4C58100C01F70000 Fadd
    temp_104 = temp_100 + vp_c3.data[7].w;
    // 0x000390: 0xEFF07F800787FF04 Ast
    gl_Position.z = temp_103;
    // 0x000398: 0x4C58100C02370202 Fadd
    temp_105 = temp_101 + vp_c3.data[8].w;
    // 0x0003A8: 0xEFF07F800707FF00 Ast
    gl_Position.x = temp_104;
    // 0x0003B0: 0xEFF07F800747FF02 Ast
    gl_Position.y = temp_105;
    // 0x0003B8: 0xE30000000007000F Exit
    return;
}
