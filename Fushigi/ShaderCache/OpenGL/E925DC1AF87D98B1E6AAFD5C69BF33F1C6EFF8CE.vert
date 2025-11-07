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

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;
layout (location = 7) out vec4 out_attr7;
layout (location = 8) out vec4 out_attr8;
layout (location = 9) out vec4 out_attr9;
layout (location = 10) out vec4 out_attr10;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    int temp_6;
    precise float temp_7;
    int temp_8;
    int temp_9;
    uint temp_10;
    uint temp_11;
    int temp_12;
    precise float temp_13;
    int temp_14;
    uint temp_15;
    int temp_16;
    precise float temp_17;
    int temp_18;
    uint temp_19;
    uint temp_20;
    int temp_21;
    precise float temp_22;
    int temp_23;
    uint temp_24;
    int temp_25;
    precise float temp_26;
    int temp_27;
    uint temp_28;
    uint temp_29;
    int temp_30;
    precise float temp_31;
    int temp_32;
    uint temp_33;
    int temp_34;
    precise float temp_35;
    precise float temp_36;
    int temp_37;
    precise float temp_38;
    int temp_39;
    precise float temp_40;
    int temp_41;
    uint temp_42;
    uint temp_43;
    int temp_44;
    precise float temp_45;
    int temp_46;
    uint temp_47;
    int temp_48;
    precise float temp_49;
    precise float temp_50;
    int temp_51;
    uint temp_52;
    uint temp_53;
    int temp_54;
    precise float temp_55;
    int temp_56;
    uint temp_57;
    int temp_58;
    precise float temp_59;
    int temp_60;
    uint temp_61;
    uint temp_62;
    int temp_63;
    precise float temp_64;
    int temp_65;
    uint temp_66;
    uint temp_67;
    int temp_68;
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
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise float temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x0103F8000007F013 Mov32i
    // 0x000010: 0xEFD87F800987FF09 Ald
    temp_0 = in_attr1.z;
    // 0x000018: 0x4C98079000270016 Mov
    // 0x000028: 0xEFD87F800807FF11 Ald
    temp_1 = in_attr0.x;
    // 0x000030: 0x4C98079000370017 Mov
    // 0x000038: 0xEFD87F800887FF0F Ald
    temp_2 = in_attr0.z;
    // 0x000048: 0xEFD87F800847FF10 Ald
    temp_3 = in_attr0.y;
    // 0x000050: 0xEFD87F800947FF12 Ald
    temp_4 = in_attr1.y;
    // 0x000058: 0x5CB0118000971A00 F2i
    temp_5 = trunc(temp_0);
    temp_6 = int(temp_5);
    // 0x000068: 0xEFD87F800907FF09 Ald
    temp_7 = in_attr1.x;
    // 0x000070: 0xEFF07F800887FF13 Ast
    out_attr0.z = 1.0;
    // 0x000078: 0x384800000057000A Shl
    temp_8 = temp_6 << 5;
    // 0x000088: 0xEFF07F800907FF13 Ast
    out_attr1.x = 1.0;
    // 0x000090: 0xEF95007005070A02 Ldc
    temp_9 = temp_8 + 80;
    temp_10 = uint(temp_9) >> 2;
    temp_11 = temp_10 >> 2;
    temp_12 = int(temp_10) & 3;
    temp_13 = vp_c7.data[int(temp_11)][temp_12];
    temp_14 = int(temp_10) + 1;
    temp_15 = uint(temp_14) >> 2;
    temp_16 = temp_14 & 3;
    temp_17 = vp_c7.data[int(temp_15)][temp_16];
    // 0x000098: 0xEF95007004070A0C Ldc
    temp_18 = temp_8 + 64;
    temp_19 = uint(temp_18) >> 2;
    temp_20 = temp_19 >> 2;
    temp_21 = int(temp_19) & 3;
    temp_22 = vp_c7.data[int(temp_20)][temp_21];
    temp_23 = int(temp_19) + 1;
    temp_24 = uint(temp_23) >> 2;
    temp_25 = temp_23 & 3;
    temp_26 = vp_c7.data[int(temp_24)][temp_25];
    // 0x0000A8: 0xEF95007004870A00 Ldc
    temp_27 = temp_8 + 72;
    temp_28 = uint(temp_27) >> 2;
    temp_29 = temp_28 >> 2;
    temp_30 = int(temp_28) & 3;
    temp_31 = vp_c7.data[int(temp_29)][temp_30];
    temp_32 = int(temp_28) + 1;
    temp_33 = uint(temp_32) >> 2;
    temp_34 = temp_32 & 3;
    temp_35 = vp_c7.data[int(temp_33)][temp_34];
    // 0x0000B0: 0xEFF07F800A47FF13 Ast
    out_attr2.y = 1.0;
    // 0x0000B8: 0x5CB0118000371A03 F2i
    temp_36 = trunc(temp_17);
    temp_37 = int(temp_36);
    // 0x0000C8: 0xEFF07F8011C7FF02 Ast
    out_attr9.w = temp_13;
    // 0x0000D0: 0x5C58100000F7000F Fadd
    temp_38 = temp_31 + temp_2;
    // 0x0000D8: 0x384800000047030B Shl
    temp_39 = temp_37 << 4;
    // 0x0000E8: 0x5C58100001170C03 Fadd
    temp_40 = temp_22 + temp_1;
    // 0x0000F0: 0xEF95006048070B06 Ldc
    temp_41 = temp_39 + 0x480;
    temp_42 = uint(temp_41) >> 2;
    temp_43 = temp_42 >> 2;
    temp_44 = int(temp_42) & 3;
    temp_45 = vp_c6.data[int(temp_43)][temp_44];
    temp_46 = int(temp_42) + 1;
    temp_47 = uint(temp_46) >> 2;
    temp_48 = temp_46 & 3;
    temp_49 = vp_c6.data[int(temp_47)][temp_48];
    // 0x0000F8: 0x5C58100001070D0C Fadd
    temp_50 = temp_26 + temp_3;
    // 0x000108: 0xEF95006068070B04 Ldc
    temp_51 = temp_39 + 0x680;
    temp_52 = uint(temp_51) >> 2;
    temp_53 = temp_52 >> 2;
    temp_54 = int(temp_52) & 3;
    temp_55 = vp_c6.data[int(temp_53)][temp_54];
    temp_56 = int(temp_52) + 1;
    temp_57 = uint(temp_56) >> 2;
    temp_58 = temp_56 & 3;
    temp_59 = vp_c6.data[int(temp_57)][temp_58];
    // 0x000110: 0xEF94006048870B08 Ldc
    temp_60 = temp_39 + 0x488;
    temp_61 = uint(temp_60) >> 2;
    temp_62 = temp_61 >> 2;
    temp_63 = int(temp_61) & 3;
    temp_64 = vp_c6.data[int(temp_62)][temp_63];
    // 0x000118: 0xEF94006068870B0E Ldc
    temp_65 = temp_39 + 0x688;
    temp_66 = uint(temp_65) >> 2;
    temp_67 = temp_66 >> 2;
    temp_68 = int(temp_66) & 3;
    temp_69 = vp_c6.data[int(temp_67)][temp_68];
    // 0x000128: 0x4C98079001270010 Mov
    // 0x000130: 0x51A008100147120A Ffma
    temp_70 = fma(temp_4, vp_c4.data[4].z, vp_c4.data[5].x);
    // 0x000138: 0x49A0051001070910 Ffma
    temp_71 = fma(temp_7, vp_c4.data[4].x, temp_70);
    // 0x000148: 0xEFF07F800F07FF10 Ast
    out_attr7.x = temp_71;
    // 0x000150: 0x508000000047070D Mufu
    temp_72 = 1.0 / temp_49;
    // 0x000158: 0x59A0020000370603 Ffma
    temp_73 = fma(temp_45, temp_40, temp_55);
    // 0x000168: 0x5080000000470606 Mufu
    temp_74 = 1.0 / temp_45;
    // 0x000170: 0x59A0070000F70800 Ffma
    temp_75 = fma(temp_64, temp_38, temp_69);
    // 0x000178: 0xEFF07F800D07FF03 Ast
    out_attr5.x = temp_73;
    // 0x000188: 0x4C9807900137000F Mov
    // 0x000190: 0xEFF07F800D87FF00 Ast
    out_attr5.z = temp_75;
    // 0x000198: 0x59A0028000C70708 Ffma
    temp_76 = fma(temp_49, temp_50, temp_59);
    // 0x0001A8: 0x4C5810140BA7000C Fadd
    temp_77 = temp_75 + vp_c5.data[46].z;
    // 0x0001B0: 0xEFF07F800D47FF08 Ast
    out_attr5.y = temp_76;
    // 0x0001B8: 0x51A007900157120F Ffma
    temp_78 = fma(temp_4, vp_c4.data[4].w, vp_c4.data[5].y);
    // 0x0001C8: 0x5C5910000037040B Fadd
    temp_79 = 0.0 - temp_55;
    temp_80 = temp_79 + temp_73;
    // 0x0001D0: 0x5C5910000087050E Fadd
    temp_81 = 0.0 - temp_59;
    temp_82 = temp_81 + temp_76;
    // 0x0001D8: 0x4C5810140B97080A Fadd
    temp_83 = temp_76 + vp_c5.data[46].y;
    // 0x0001E8: 0x4C98079000B70012 Mov
    // 0x0001F0: 0x4C6810140C670C07 Fmul
    temp_84 = temp_77 * vp_c5.data[49].z;
    // 0x0001F8: 0x4C6810140C270C04 Fmul
    temp_85 = temp_77 * vp_c5.data[48].z;
    // 0x000208: 0x4C6810140CA70C0C Fmul
    temp_86 = temp_77 * vp_c5.data[50].z;
    // 0x000210: 0x49A0079001170911 Ffma
    temp_87 = fma(temp_7, vp_c4.data[4].y, temp_78);
    // 0x000218: 0x5C68100000B70605 Fmul
    temp_88 = temp_74 * temp_80;
    // 0x000228: 0xEFF07F800F47FF11 Ast
    out_attr7.y = temp_87;
    // 0x000230: 0x5C68100000E70D09 Fmul
    temp_89 = temp_72 * temp_82;
    // 0x000238: 0x4C68100C0087030B Fmul
    temp_90 = temp_73 * vp_c3.data[2].x;
    // 0x000248: 0x4C68100C0007030D Fmul
    temp_91 = temp_73 * vp_c3.data[0].x;
    // 0x000250: 0x49A003940C570A06 Ffma
    temp_92 = fma(temp_83, vp_c5.data[49].y, temp_84);
    // 0x000258: 0x49A006140C970A07 Ffma
    temp_93 = fma(temp_83, vp_c5.data[50].y, temp_86);
    // 0x000268: 0x49A002140C170A04 Ffma
    temp_94 = fma(temp_83, vp_c5.data[48].y, temp_85);
    // 0x000270: 0x4C5830140B07030C Fadd
    temp_95 = 0.0 - vp_c5.data[44].x;
    temp_96 = temp_73 + temp_95;
    // 0x000278: 0x49A0058C00970802 Ffma
    temp_97 = fma(temp_76, vp_c3.data[2].y, temp_90);
    // 0x000288: 0x4C68100C0047030A Fmul
    temp_98 = temp_73 * vp_c3.data[1].x;
    // 0x000290: 0x49A0068C0017080B Ffma
    temp_99 = fma(temp_76, vp_c3.data[0].y, temp_91);
    // 0x000298: 0x4C98079000A7000E Mov
    // 0x0002A8: 0x4C58300C02F7030F Fadd
    temp_100 = 0.0 - vp_c3.data[11].w;
    temp_101 = temp_73 + temp_100;
    // 0x0002B0: 0x4C68101403870C13 Fmul
    temp_102 = temp_96 * vp_c5.data[14].x;
    // 0x0002B8: 0xEFF07F800B07FF0F Ast
    out_attr3.x = temp_101;
    // 0x0002C8: 0x4C58300C03370811 Fadd
    temp_103 = 0.0 - vp_c3.data[12].w;
    temp_104 = temp_76 + temp_103;
    // 0x0002D0: 0x49A0050C0057080A Ffma
    temp_105 = fma(temp_76, vp_c3.data[1].y, temp_98);
    // 0x0002D8: 0xEFF07F800B47FF11 Ast
    out_attr3.y = temp_104;
    // 0x0002E8: 0x4C5830140B17080D Fadd
    temp_106 = 0.0 - vp_c5.data[44].y;
    temp_107 = temp_76 + temp_106;
    // 0x0002F0: 0x49A0058C0027000C Ffma
    temp_108 = fma(temp_75, vp_c3.data[0].z, temp_99);
    // 0x0002F8: 0x5C58100000070108 Fadd
    temp_109 = temp_35 + temp_75;
    // 0x000308: 0x51A1091000D7090F Ffma
    temp_110 = 0.0 - vp_c4.data[2].w;
    temp_111 = fma(temp_89, temp_110, vp_c4.data[3].y);
    // 0x000310: 0x51A1071000C7090E Ffma
    temp_112 = 0.0 - vp_c4.data[2].z;
    temp_113 = fma(temp_89, temp_112, vp_c4.data[3].x);
    // 0x000318: 0x51A10B1000470910 Ffma
    temp_114 = 0.0 - vp_c4.data[0].z;
    temp_115 = fma(temp_89, temp_114, vp_c4.data[1].x);
    // 0x000328: 0x51A10B9000570912 Ffma
    temp_116 = 0.0 - vp_c4.data[0].w;
    temp_117 = fma(temp_89, temp_116, vp_c4.data[1].y);
    // 0x000330: 0x49A0050C00670009 Ffma
    temp_118 = fma(temp_75, vp_c3.data[1].z, temp_105);
    // 0x000338: 0x4C58100C00370C0C Fadd
    temp_119 = temp_108 + vp_c3.data[0].w;
    // 0x000348: 0x49A0058C0027080B Ffma
    temp_120 = fma(temp_109, vp_c3.data[0].z, temp_99);
    // 0x000350: 0x49A0050C00670801 Ffma
    temp_121 = fma(temp_109, vp_c3.data[1].z, temp_105);
    // 0x000358: 0x49A0010C00A70808 Ffma
    temp_122 = fma(temp_109, vp_c3.data[2].z, temp_97);
    // 0x000368: 0x49A0010C00A70002 Ffma
    temp_123 = fma(temp_75, vp_c3.data[2].z, temp_97);
    // 0x000370: 0x4C58100C0077090A Fadd
    temp_124 = temp_118 + vp_c3.data[1].w;
    // 0x000378: 0x4C68101402C70C0C Fmul
    temp_125 = temp_119 * vp_c5.data[11].x;
    // 0x000388: 0x4C58100C00370B0B Fadd
    temp_126 = temp_120 + vp_c3.data[0].w;
    // 0x000390: 0x49A007100087050E Ffma
    temp_127 = fma(temp_88, vp_c4.data[2].x, temp_113);
    // 0x000398: 0x49A007900097050F Ffma
    temp_128 = fma(temp_88, vp_c4.data[2].y, temp_111);
    // 0x0003A8: 0xEFF07F800E87FF0E Ast
    out_attr6.z = temp_127;
    // 0x0003B0: 0x49A0081000070510 Ffma
    temp_129 = fma(temp_88, vp_c4.data[0].x, temp_115);
    // 0x0003B8: 0xEFF07F800EC7FF0F Ast
    out_attr6.w = temp_128;
    // 0x0003C8: 0x49A0091000170512 Ffma
    temp_130 = fma(temp_88, vp_c4.data[0].y, temp_117);
    // 0x0003D0: 0xEFF07F800E07FF10 Ast
    out_attr6.x = temp_129;
    // 0x0003D8: 0x4C58300C03770014 Fadd
    temp_131 = 0.0 - vp_c3.data[13].w;
    temp_132 = temp_75 + temp_131;
    // 0x0003E8: 0xEFF07F800E47FF12 Ast
    out_attr6.y = temp_130;
    // 0x0003F0: 0x49A0061402D70A0C Ffma
    temp_133 = fma(temp_124, vp_c5.data[11].y, temp_125);
    // 0x0003F8: 0xEFF07F800B87FF14 Ast
    out_attr3.z = temp_132;
    // 0x000408: 0x4C5830140B270005 Fadd
    temp_134 = 0.0 - vp_c5.data[44].z;
    temp_135 = temp_75 + temp_134;
    // 0x000410: 0x4C58100C00B70202 Fadd
    temp_136 = temp_123 + vp_c3.data[2].w;
    // 0x000418: 0x4C58100C00770101 Fadd
    temp_137 = temp_121 + vp_c3.data[1].w;
    // 0x000428: 0xEFF07F800C87FF02 Ast
    out_attr4.z = temp_136;
    // 0x000430: 0x4C68100C02470B00 Fmul
    temp_138 = temp_126 * vp_c3.data[9].x;
    // 0x000438: 0x49A0099403970D13 Ffma
    temp_139 = fma(temp_107, vp_c5.data[14].y, temp_102);
    // 0x000448: 0x49A0061402E7020C Ffma
    temp_140 = fma(temp_136, vp_c5.data[11].z, temp_133);
    // 0x000450: 0x4C5810140B870309 Fadd
    temp_141 = temp_73 + vp_c5.data[46].x;
    // 0x000458: 0x4C98079403C7000E Mov
    // 0x000468: 0x4C68100C01C70B03 Fmul
    temp_142 = temp_126 * vp_c3.data[7].x;
    // 0x000470: 0x4C58100C00B70808 Fadd
    temp_143 = temp_122 + vp_c3.data[2].w;
    // 0x000478: 0x49A0000C02570102 Ffma
    temp_144 = fma(temp_137, vp_c3.data[9].y, temp_138);
    // 0x000488: 0x49A0099403A70505 Ffma
    temp_145 = fma(temp_135, vp_c5.data[14].z, temp_139);
    // 0x000490: 0x4C68100C02870B00 Fmul
    temp_146 = temp_126 * vp_c3.data[10].x;
    // 0x000498: 0x4C68100C02070B0B Fmul
    temp_147 = temp_126 * vp_c3.data[8].x;
    // 0x0004A8: 0x49A003140C470906 Ffma
    temp_148 = fma(temp_141, vp_c5.data[49].x, temp_92);
    // 0x0004B0: 0x49A003940C870907 Ffma
    temp_149 = fma(temp_141, vp_c5.data[50].x, temp_93);
    // 0x0004B8: 0x49A002140C070904 Ffma
    temp_150 = fma(temp_141, vp_c5.data[48].x, temp_94);
    // 0x0004C8: 0x51A0071403B70509 Ffma
    temp_151 = fma(temp_145, vp_c5.data[15].x, vp_c5.data[14].w);
    // 0x0004D0: 0x49A0018C01D70103 Ffma
    temp_152 = fma(temp_137, vp_c3.data[7].y, temp_142);
    // 0x0004D8: 0xEFF07F801047FF09 Ast
    out_attr8.y = temp_151;
    // 0x0004E8: 0x49A0000C02970105 Ffma
    temp_153 = fma(temp_137, vp_c3.data[10].y, temp_146);
    // 0x0004F0: 0x49A0058C0217010B Ffma
    temp_154 = fma(temp_137, vp_c3.data[8].y, temp_147);
    // 0x0004F8: 0x4C9807940307000A Mov
    // 0x000508: 0x49A0010C02670802 Ffma
    temp_155 = fma(temp_143, vp_c3.data[9].z, temp_144);
    // 0x000510: 0x4C6810140BB70606 Fmul
    temp_156 = temp_148 * vp_c5.data[46].w;
    // 0x000518: 0x49A0018C01E70803 Ffma
    temp_157 = fma(temp_143, vp_c3.data[7].z, temp_152);
    // 0x000528: 0xEFF07F801247FF06 Ast
    out_attr10.y = temp_156;
    // 0x000530: 0x49A0028C02A70805 Ffma
    temp_158 = fma(temp_143, vp_c3.data[10].z, temp_153);
    // 0x000538: 0x49A0058C0227080B Ffma
    temp_159 = fma(temp_143, vp_c3.data[8].z, temp_154);
    // 0x000548: 0x4C6810140BB70404 Fmul
    temp_160 = temp_150 * vp_c5.data[46].w;
    // 0x000550: 0x4C6810140BB70707 Fmul
    temp_161 = temp_149 * vp_c5.data[46].w;
    // 0x000558: 0xEFF07F801207FF04 Ast
    out_attr10.x = temp_160;
    // 0x000568: 0x51A0051402F70C0C Ffma
    temp_162 = fma(temp_140, vp_c5.data[12].x, vp_c5.data[11].w);
    // 0x000570: 0xEFF07F801287FF07 Ast
    out_attr10.z = temp_161;
    // 0x000578: 0x4C58100C02770202 Fadd
    temp_163 = temp_155 + vp_c3.data[9].w;
    // 0x000588: 0xEFF07F801007FF0C Ast
    out_attr8.x = temp_162;
    // 0x000590: 0x4C58100C01F70303 Fadd
    temp_164 = temp_157 + vp_c3.data[7].w;
    // 0x000598: 0xEFF07F800787FF02 Ast
    gl_Position.z = temp_163;
    // 0x0005A8: 0x4C58100C02B70505 Fadd
    temp_165 = temp_158 + vp_c3.data[10].w;
    // 0x0005B0: 0xEFF07F800707FF03 Ast
    gl_Position.x = temp_164;
    // 0x0005B8: 0x4C58100C02370B0B Fadd
    temp_166 = temp_159 + vp_c3.data[8].w;
    // 0x0005C8: 0xEFF07F8007C7FF05 Ast
    gl_Position.w = temp_165;
    // 0x0005D0: 0xEFF07F800747FF0B Ast
    gl_Position.y = temp_166;
    // 0x0005D8: 0xE30000000007000F Exit
    return;
}
