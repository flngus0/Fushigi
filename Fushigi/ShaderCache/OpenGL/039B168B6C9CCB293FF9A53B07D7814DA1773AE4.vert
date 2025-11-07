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

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;


void main()
{
    precise float temp_0;
    precise float temp_1;
    int temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    int temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    int temp_14;
    uint temp_15;
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
    uint temp_26;
    int temp_27;
    precise float temp_28;
    int temp_29;
    uint temp_30;
    int temp_31;
    precise float temp_32;
    int temp_33;
    uint temp_34;
    uint temp_35;
    int temp_36;
    precise float temp_37;
    int temp_38;
    uint temp_39;
    int temp_40;
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
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079400270014 Mov
    // 0x000010: 0xEFD87F800807FF0D Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4CB0119002371A00 F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000028: 0xEFD87F800847FF12 Ald
    temp_3 = in_attr0.y;
    // 0x000030: 0xEFD87F800907FF11 Ald
    temp_4 = in_attr1.x;
    // 0x000038: 0xEFD87F800887FF13 Ald
    temp_5 = in_attr0.z;
    // 0x000048: 0x3848000000470004 Shl
    temp_6 = temp_2 << 4;
    // 0x000050: 0xEFD87F800947FF17 Ald
    temp_7 = in_attr1.y;
    // 0x000058: 0x4C68101000070D05 Fmul
    temp_8 = temp_0 * vp_c4.data[0].x;
    // 0x000068: 0xEFD87F800987FF06 Ald
    temp_9 = in_attr1.z;
    // 0x000070: 0x4C68101000470D0B Fmul
    temp_10 = temp_0 * vp_c4.data[1].x;
    // 0x000078: 0xEFD87F801047FF0A Ald
    temp_11 = in_attr8.y;
    // 0x000088: 0x4C68101000870D0D Fmul
    temp_12 = temp_0 * vp_c4.data[2].x;
    // 0x000090: 0xEFD87F801007FF08 Ald
    temp_13 = in_attr8.x;
    // 0x000098: 0xEF94007048870407 Ldc
    temp_14 = temp_6 + 0x488;
    temp_15 = uint(temp_14) >> 2;
    temp_16 = temp_15 >> 2;
    temp_17 = int(temp_15) & 3;
    temp_18 = vp_c7.data[int(temp_16)][temp_17];
    // 0x0000A8: 0xEF94007068870409 Ldc
    temp_19 = temp_6 + 0x688;
    temp_20 = uint(temp_19) >> 2;
    temp_21 = temp_20 >> 2;
    temp_22 = int(temp_20) & 3;
    temp_23 = vp_c7.data[int(temp_21)][temp_22];
    // 0x0000B0: 0xEF95007048070400 Ldc
    temp_24 = temp_6 + 0x480;
    temp_25 = uint(temp_24) >> 2;
    temp_26 = temp_25 >> 2;
    temp_27 = int(temp_25) & 3;
    temp_28 = vp_c7.data[int(temp_26)][temp_27];
    temp_29 = int(temp_25) + 1;
    temp_30 = uint(temp_29) >> 2;
    temp_31 = temp_29 & 3;
    temp_32 = vp_c7.data[int(temp_30)][temp_31];
    // 0x0000B8: 0xEF95007068070402 Ldc
    temp_33 = temp_6 + 0x680;
    temp_34 = uint(temp_33) >> 2;
    temp_35 = temp_34 >> 2;
    temp_36 = int(temp_34) & 3;
    temp_37 = vp_c7.data[int(temp_35)][temp_36];
    temp_38 = int(temp_34) + 1;
    temp_39 = uint(temp_38) >> 2;
    temp_40 = temp_38 & 3;
    temp_41 = vp_c7.data[int(temp_39)][temp_40];
    // 0x0000C8: 0x4C6810100007110E Fmul
    temp_42 = temp_4 * vp_c4.data[0].x;
    // 0x0000D0: 0x49A006900097120D Ffma
    temp_43 = fma(temp_3, vp_c4.data[2].y, temp_12);
    // 0x0000D8: 0x49A0029000171205 Ffma
    temp_44 = fma(temp_3, vp_c4.data[0].y, temp_8);
    // 0x0000E8: 0x49A005900057120C Ffma
    temp_45 = fma(temp_3, vp_c4.data[1].y, temp_10);
    // 0x0000F0: 0x4C68101000471110 Fmul
    temp_46 = temp_4 * vp_c4.data[1].x;
    // 0x0000F8: 0x4C68101000871111 Fmul
    temp_47 = temp_4 * vp_c4.data[2].x;
    // 0x000108: 0x49A007100017170F Ffma
    temp_48 = fma(temp_7, vp_c4.data[0].y, temp_42);
    // 0x000110: 0x49A0069000A7130D Ffma
    temp_49 = fma(temp_5, vp_c4.data[2].z, temp_43);
    // 0x000118: 0x49A002900027130B Ffma
    temp_50 = fma(temp_5, vp_c4.data[0].z, temp_44);
    // 0x000128: 0x49A006100067130C Ffma
    temp_51 = fma(temp_5, vp_c4.data[1].z, temp_45);
    // 0x000130: 0x49A0081000571710 Ffma
    temp_52 = fma(temp_7, vp_c4.data[1].y, temp_46);
    // 0x000138: 0x4C98079400370013 Mov
    // 0x000148: 0x49A0079000270604 Ffma
    temp_53 = fma(temp_9, vp_c4.data[0].z, temp_48);
    // 0x000150: 0x4C58101000B70D0E Fadd
    temp_54 = temp_49 + vp_c4.data[2].w;
    // 0x000158: 0x4C58101000370B0B Fadd
    temp_55 = temp_50 + vp_c4.data[0].w;
    // 0x000168: 0x4C58101000770C0C Fadd
    temp_56 = temp_51 + vp_c4.data[1].w;
    // 0x000170: 0x49A0089000971711 Ffma
    temp_57 = fma(temp_7, vp_c4.data[2].y, temp_47);
    // 0x000178: 0x49A0081000670605 Ffma
    temp_58 = fma(temp_9, vp_c4.data[1].z, temp_52);
    // 0x000188: 0x5C6810000047040F Fmul
    temp_59 = temp_53 * temp_53;
    // 0x000190: 0x51A00A1400470A12 Ffma
    temp_60 = fma(temp_11, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000198: 0x51A0099400570A0A Ffma
    temp_61 = fma(temp_11, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x0001A8: 0x59A0048000770E07 Ffma
    temp_62 = fma(temp_54, temp_18, temp_23);
    // 0x0001B0: 0x49A0089000A70606 Ffma
    temp_63 = fma(temp_9, vp_c4.data[2].z, temp_57);
    // 0x0001B8: 0xEFF07F800B87FF07 Ast
    out_attr3.z = temp_62;
    // 0x0001C8: 0x59A0010000070B00 Ffma
    temp_64 = fma(temp_55, temp_28, temp_37);
    // 0x0001D0: 0x59A0018000170C09 Ffma
    temp_65 = fma(temp_56, temp_32, temp_41);
    // 0x0001D8: 0xEFF07F800B07FF00 Ast
    out_attr3.x = temp_64;
    // 0x0001E8: 0x4C5810180BA70701 Fadd
    temp_66 = temp_62 + vp_c6.data[46].z;
    // 0x0001F0: 0xEFF07F800B47FF09 Ast
    out_attr3.y = temp_65;
    // 0x0001F8: 0x59A007800057050F Ffma
    temp_67 = fma(temp_58, temp_58, temp_59);
    // 0x000208: 0x49A0051400170813 Ffma
    temp_68 = fma(temp_13, vp_c5.data[0].y, temp_61);
    // 0x000210: 0x4C68100C00070002 Fmul
    temp_69 = temp_64 * vp_c3.data[0].x;
    // 0x000218: 0xEFF07F800C47FF13 Ast
    out_attr4.y = temp_68;
    // 0x000228: 0x4C5810180B97090A Fadd
    temp_70 = temp_65 + vp_c6.data[46].y;
    // 0x000230: 0x4C6810180CA70110 Fmul
    temp_71 = temp_66 * vp_c6.data[50].z;
    // 0x000238: 0x49A0091400070812 Ffma
    temp_72 = fma(temp_13, vp_c5.data[0].x, temp_60);
    // 0x000248: 0x59A0078000670603 Ffma
    temp_73 = fma(temp_63, temp_63, temp_67);
    // 0x000250: 0xEFF07F800C07FF12 Ast
    out_attr4.x = temp_72;
    // 0x000258: 0x4C68100C0047000C Fmul
    temp_74 = temp_64 * vp_c3.data[1].x;
    // 0x000268: 0x5080000000570303 Mufu
    temp_75 = inversesqrt(temp_73);
    // 0x000270: 0x4C6810180C270108 Fmul
    temp_76 = temp_66 * vp_c6.data[48].z;
    // 0x000278: 0x4C6810180C67010F Fmul
    temp_77 = temp_66 * vp_c6.data[49].z;
    // 0x000288: 0x49A0010C0017090D Ffma
    temp_78 = fma(temp_65, vp_c3.data[0].y, temp_69);
    // 0x000290: 0x4C68100C0087000B Fmul
    temp_79 = temp_64 * vp_c3.data[2].x;
    // 0x000298: 0x49A008180C970A02 Ffma
    temp_80 = fma(temp_70, vp_c6.data[50].y, temp_71);
    // 0x0002A8: 0x49A0060C00570910 Ffma
    temp_81 = fma(temp_65, vp_c3.data[1].y, temp_74);
    // 0x0002B0: 0x49A004180C170A08 Ffma
    temp_82 = fma(temp_70, vp_c6.data[48].y, temp_76);
    // 0x0002B8: 0x49A007980C570A01 Ffma
    temp_83 = fma(temp_70, vp_c6.data[49].y, temp_77);
    // 0x0002C8: 0x4C58300C02F7000E Fadd
    temp_84 = 0.0 - vp_c3.data[11].w;
    temp_85 = temp_64 + temp_84;
    // 0x0002D0: 0x4C5810100207070A Fadd
    temp_86 = temp_62 + vp_c4.data[8].x;
    // 0x0002D8: 0xEFF07F800907FF0E Ast
    out_attr1.x = temp_85;
    // 0x0002E8: 0x49A0058C0097090C Ffma
    temp_87 = fma(temp_65, vp_c3.data[2].y, temp_79);
    // 0x0002F0: 0x4C58300C03370911 Fadd
    temp_88 = 0.0 - vp_c3.data[12].w;
    temp_89 = temp_65 + temp_88;
    // 0x0002F8: 0x4C5830180B07000F Fadd
    temp_90 = 0.0 - vp_c6.data[44].x;
    temp_91 = temp_64 + temp_90;
    // 0x000308: 0xEFF07F800947FF11 Ast
    out_attr1.y = temp_89;
    // 0x000310: 0x49A0080C0067070B Ffma
    temp_92 = fma(temp_62, vp_c3.data[1].z, temp_81);
    // 0x000318: 0x49A0068C0027070E Ffma
    temp_93 = fma(temp_62, vp_c3.data[0].z, temp_78);
    // 0x000328: 0x49A0068C00270A0D Ffma
    temp_94 = fma(temp_86, vp_c3.data[0].z, temp_78);
    // 0x000330: 0x4C58300C03770712 Fadd
    temp_95 = 0.0 - vp_c3.data[13].w;
    temp_96 = temp_62 + temp_95;
    // 0x000338: 0x5C68100000370413 Fmul
    temp_97 = temp_53 * temp_75;
    // 0x000348: 0xEFF07F800987FF12 Ast
    out_attr1.z = temp_96;
    // 0x000350: 0x4C5830180B170911 Fadd
    temp_98 = 0.0 - vp_c6.data[44].y;
    temp_99 = temp_65 + temp_98;
    // 0x000358: 0xEFF07F800807FF13 Ast
    out_attr0.x = temp_97;
    // 0x000368: 0x4C68101803870F0F Fmul
    temp_100 = temp_91 * vp_c6.data[14].x;
    // 0x000370: 0x4C58100C00770B09 Fadd
    temp_101 = temp_92 + vp_c3.data[1].w;
    // 0x000378: 0x4C5810180B87000B Fadd
    temp_102 = temp_64 + vp_c6.data[46].x;
    // 0x000388: 0x49A0080C00670A04 Ffma
    temp_103 = fma(temp_86, vp_c3.data[1].z, temp_81);
    // 0x000390: 0x4C58100C00370D0D Fadd
    temp_104 = temp_94 + vp_c3.data[0].w;
    // 0x000398: 0x5C68100000370512 Fmul
    temp_105 = temp_58 * temp_75;
    // 0x0003A8: 0x5C68100000370606 Fmul
    temp_106 = temp_63 * temp_75;
    // 0x0003B0: 0xEFF07F800847FF12 Ast
    out_attr0.y = temp_105;
    // 0x0003B8: 0x49A0079803971111 Ffma
    temp_107 = fma(temp_99, vp_c6.data[14].y, temp_100);
    // 0x0003C8: 0xEFF07F800887FF06 Ast
    out_attr0.z = temp_106;
    // 0x0003D0: 0x4C5830180B270703 Fadd
    temp_108 = 0.0 - vp_c6.data[44].z;
    temp_109 = temp_62 + temp_108;
    // 0x0003D8: 0x49A000980C470B00 Ffma
    temp_110 = fma(temp_102, vp_c6.data[49].x, temp_83);
    // 0x0003E8: 0x4C58100C00770404 Fadd
    temp_111 = temp_103 + vp_c3.data[1].w;
    // 0x0003F0: 0x4C68100C02470D01 Fmul
    temp_112 = temp_104 * vp_c3.data[9].x;
    // 0x0003F8: 0x4C58100C00370E0E Fadd
    temp_113 = temp_93 + vp_c3.data[0].w;
    // 0x000408: 0x49A004180C070B08 Ffma
    temp_114 = fma(temp_102, vp_c6.data[48].x, temp_82);
    // 0x000410: 0x49A0089803A70311 Ffma
    temp_115 = fma(temp_109, vp_c6.data[14].z, temp_107);
    // 0x000418: 0x4C6810180BB70003 Fmul
    temp_116 = temp_110 * vp_c6.data[46].w;
    // 0x000428: 0x49A001180C870B0B Ffma
    temp_117 = fma(temp_102, vp_c6.data[50].x, temp_80);
    // 0x000430: 0xEFF07F800E47FF03 Ast
    out_attr6.y = temp_116;
    // 0x000438: 0x49A0008C02570400 Ffma
    temp_118 = fma(temp_111, vp_c3.data[9].y, temp_112);
    // 0x000448: 0x49A0060C00A70A05 Ffma
    temp_119 = fma(temp_86, vp_c3.data[2].z, temp_87);
    // 0x000450: 0x4C68100C01C70D02 Fmul
    temp_120 = temp_104 * vp_c3.data[7].x;
    // 0x000458: 0x4C68100C02870D01 Fmul
    temp_121 = temp_104 * vp_c3.data[10].x;
    // 0x000468: 0x4C68101802C70E0E Fmul
    temp_122 = temp_113 * vp_c6.data[11].x;
    // 0x000470: 0x49A0060C00A7070C Ffma
    temp_123 = fma(temp_62, vp_c3.data[2].z, temp_87);
    // 0x000478: 0x4C68100C02070D0D Fmul
    temp_124 = temp_104 * vp_c3.data[8].x;
    // 0x000488: 0x4C58100C00B70505 Fadd
    temp_125 = temp_119 + vp_c3.data[2].w;
    // 0x000490: 0x49A0010C01D70402 Ffma
    temp_126 = fma(temp_111, vp_c3.data[7].y, temp_120);
    // 0x000498: 0x49A0008C02970403 Ffma
    temp_127 = fma(temp_111, vp_c3.data[10].y, temp_121);
    // 0x0004A8: 0x49A0071802D70909 Ffma
    temp_128 = fma(temp_101, vp_c6.data[11].y, temp_122);
    // 0x0004B0: 0x4C58100C00B70C0C Fadd
    temp_129 = temp_123 + vp_c3.data[2].w;
    // 0x0004B8: 0x49A0068C02170404 Ffma
    temp_130 = fma(temp_111, vp_c3.data[8].y, temp_124);
    // 0x0004C8: 0xEFF07F800A87FF0C Ast
    out_attr2.z = temp_129;
    // 0x0004D0: 0x4C98079803C70007 Mov
    // 0x0004D8: 0x49A0049802E70C09 Ffma
    temp_131 = fma(temp_129, vp_c6.data[11].z, temp_128);
    // 0x0004E8: 0x4C98079803070006 Mov
    // 0x0004F0: 0x49A0000C02670500 Ffma
    temp_132 = fma(temp_125, vp_c3.data[9].z, temp_118);
    // 0x0004F8: 0x49A0010C01E70502 Ffma
    temp_133 = fma(temp_125, vp_c3.data[7].z, temp_126);
    // 0x000508: 0x49A0018C02A70503 Ffma
    temp_134 = fma(temp_125, vp_c3.data[10].z, temp_127);
    // 0x000510: 0x49A0020C02270504 Ffma
    temp_135 = fma(temp_125, vp_c3.data[8].z, temp_130);
    // 0x000518: 0x4C6810180BB70808 Fmul
    temp_136 = temp_114 * vp_c6.data[46].w;
    // 0x000528: 0x4C6810180BB70B0B Fmul
    temp_137 = temp_117 * vp_c6.data[46].w;
    // 0x000530: 0xEFF07F800E07FF08 Ast
    out_attr6.x = temp_136;
    // 0x000538: 0x51A0039803B71111 Ffma
    temp_138 = fma(temp_115, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000548: 0xEFF07F800E87FF0B Ast
    out_attr6.z = temp_137;
    // 0x000550: 0x51A0031802F70909 Ffma
    temp_139 = fma(temp_131, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000558: 0xEFF07F800D47FF11 Ast
    out_attr5.y = temp_138;
    // 0x000568: 0x4C58100C02770000 Fadd
    temp_140 = temp_132 + vp_c3.data[9].w;
    // 0x000570: 0xEFF07F800D07FF09 Ast
    out_attr5.x = temp_139;
    // 0x000578: 0x4C58100C01F70202 Fadd
    temp_141 = temp_133 + vp_c3.data[7].w;
    // 0x000588: 0xEFF07F800787FF00 Ast
    gl_Position.z = temp_140;
    // 0x000590: 0x4C58100C02B70303 Fadd
    temp_142 = temp_134 + vp_c3.data[10].w;
    // 0x000598: 0xEFF07F800707FF02 Ast
    gl_Position.x = temp_141;
    // 0x0005A8: 0x4C58100C02370404 Fadd
    temp_143 = temp_135 + vp_c3.data[8].w;
    // 0x0005B0: 0xEFF07F8007C7FF03 Ast
    gl_Position.w = temp_142;
    // 0x0005B8: 0xEFF07F800747FF04 Ast
    gl_Position.y = temp_143;
    // 0x0005C8: 0xE30000000007000F Exit
    return;
}
