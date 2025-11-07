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
layout (location = 2) in vec4 in_attr2;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;
layout (location = 8) out vec4 out_attr8;
layout (location = 9) out vec4 out_attr9;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    int temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    int temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
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
    int temp_45;
    uint temp_46;
    uint temp_47;
    int temp_48;
    precise float temp_49;
    int temp_50;
    uint temp_51;
    int temp_52;
    precise float temp_53;
    precise float temp_54;
    int temp_55;
    uint temp_56;
    uint temp_57;
    int temp_58;
    precise float temp_59;
    int temp_60;
    uint temp_61;
    int temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    int temp_70;
    uint temp_71;
    uint temp_72;
    int temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    int temp_83;
    uint temp_84;
    uint temp_85;
    int temp_86;
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
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
    precise float temp_210;
    precise float temp_211;
    precise float temp_212;
    precise float temp_213;
    precise float temp_214;
    precise float temp_215;
    precise float temp_216;
    precise float temp_217;
    precise float temp_218;
    precise float temp_219;
    precise float temp_220;
    precise float temp_221;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079C23070000 Mov
    // 0x000010: 0xEFD87F800807FF10 Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4C98079406970005 Mov
    // 0x000028: 0xEFD87F800847FF09 Ald
    temp_1 = in_attr0.y;
    // 0x000030: 0x4CB0119002371A11 F2i
    temp_2 = trunc(vp_c4.data[8].w);
    temp_3 = int(temp_2);
    // 0x000038: 0x4C68101406870002 Fmul
    temp_4 = vp_c7.data[140].x * vp_c5.data[26].x;
    // 0x000048: 0xEFD87F800887FF0A Ald
    temp_5 = in_attr0.z;
    // 0x000050: 0x3858103E80070000 Fadd
    temp_6 = vp_c7.data[140].x + 0.25;
    // 0x000058: 0xEFD87F800987FF01 Ald
    temp_7 = in_attr1.z;
    // 0x000068: 0x4C68101406770505 Fmul
    temp_8 = vp_c5.data[26].y * vp_c5.data[25].w;
    // 0x000070: 0xEFD87F800907FF0D Ald
    temp_9 = in_attr1.x;
    // 0x000078: 0x1E240490FDB70202 Fmul32i
    temp_10 = temp_4 * 3.14159274;
    // 0x000088: 0xEFD87F800A87FF07 Ald
    temp_11 = in_attr2.z;
    // 0x000090: 0x4C68101406870000 Fmul
    temp_12 = temp_6 * vp_c5.data[26].x;
    // 0x000098: 0xEFD87F800A47FF0C Ald
    temp_13 = in_attr2.y;
    // 0x0000A8: 0x5C68100001071003 Fmul
    temp_14 = temp_0 * temp_0;
    // 0x0000B0: 0xEFD87F801047FF13 Ald
    temp_15 = in_attr8.y;
    // 0x0000B8: 0x5C90000000270002 Rro
    // 0x0000C8: 0xEFD87F800A07FF0E Ald
    temp_16 = in_attr2.x;
    // 0x0000D0: 0x1E240490FDB70000 Fmul32i
    temp_17 = temp_12 * 3.14159274;
    // 0x0000D8: 0x5080000000170202 Mufu
    temp_18 = sin(temp_10);
    // 0x0000E8: 0x59A0018000970904 Ffma
    temp_19 = fma(temp_1, temp_1, temp_14);
    // 0x0000F0: 0x4C98079400370014 Mov
    // 0x0000F8: 0x3848000000471111 Shl
    temp_20 = temp_3 << 4;
    // 0x000108: 0x5C90000000070008 Rro
    // 0x000110: 0xEFD87F800947FF00 Ald
    temp_21 = in_attr1.y;
    // 0x000118: 0x59A0020000A70A04 Ffma
    temp_22 = fma(temp_5, temp_5, temp_19);
    // 0x000128: 0x5080000000170803 Mufu
    temp_23 = sin(temp_17);
    // 0x000130: 0x5C68100000270202 Fmul
    temp_24 = temp_18 * temp_18;
    // 0x000138: 0x508000000057040F Mufu
    temp_25 = inversesqrt(temp_22);
    // 0x000148: 0x5C68100000770D08 Fmul
    temp_26 = temp_9 * temp_11;
    // 0x000150: 0x5C68100000570206 Fmul
    temp_27 = temp_24 * temp_8;
    // 0x000158: 0x4C98079400270005 Mov
    // 0x000168: 0x5C68100000370303 Fmul
    temp_28 = temp_23 * temp_23;
    // 0x000170: 0x5C68100000C70102 Fmul
    temp_29 = temp_7 * temp_13;
    // 0x000178: 0x51A00A1400571304 Ffma
    temp_30 = fma(temp_15, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000188: 0x59A2040000E70108 Ffma
    temp_31 = 0.0 - temp_26;
    temp_32 = fma(temp_7, temp_16, temp_31);
    // 0x000190: 0x4C68101000470E15 Fmul
    temp_33 = temp_16 * vp_c4.data[1].x;
    // 0x000198: 0x5C68100001070F0B Fmul
    temp_34 = temp_25 * temp_0;
    // 0x0001A8: 0x5C68100000970F12 Fmul
    temp_35 = temp_25 * temp_1;
    // 0x0001B0: 0x4C68101406970303 Fmul
    temp_36 = temp_28 * vp_c5.data[26].y;
    // 0x0001B8: 0x51A0029400471305 Ffma
    temp_37 = fma(temp_15, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x0001C8: 0x4C68101000070E13 Fmul
    temp_38 = temp_16 * vp_c4.data[0].x;
    // 0x0001D0: 0x5C68100000A70F14 Fmul
    temp_39 = temp_25 * temp_5;
    // 0x0001D8: 0x59A0080000B70610 Ffma
    temp_40 = fma(temp_27, temp_34, temp_0);
    // 0x0001E8: 0xEFD87F800AC7FF06 Ald
    temp_41 = in_attr2.w;
    // 0x0001F0: 0x59A201000007070B Ffma
    temp_42 = 0.0 - temp_29;
    temp_43 = fma(temp_11, temp_21, temp_42);
    // 0x0001F8: 0x59A0048001270309 Ffma
    temp_44 = fma(temp_36, temp_35, temp_1);
    // 0x000208: 0xEF95007068071102 Ldc
    temp_45 = temp_20 + 0x680;
    temp_46 = uint(temp_45) >> 2;
    temp_47 = temp_46 >> 2;
    temp_48 = int(temp_46) & 3;
    temp_49 = vp_c7.data[int(temp_47)][temp_48];
    temp_50 = int(temp_46) + 1;
    temp_51 = uint(temp_50) >> 2;
    temp_52 = temp_50 & 3;
    temp_53 = vp_c7.data[int(temp_51)][temp_52];
    // 0x000210: 0x5C68100000E70012 Fmul
    temp_54 = temp_21 * temp_16;
    // 0x000218: 0xEF95007048071100 Ldc
    temp_55 = temp_20 + 0x480;
    temp_56 = uint(temp_55) >> 2;
    temp_57 = temp_56 >> 2;
    temp_58 = int(temp_56) & 3;
    temp_59 = vp_c7.data[int(temp_57)][temp_58];
    temp_60 = int(temp_56) + 1;
    temp_61 = uint(temp_60) >> 2;
    temp_62 = temp_60 & 3;
    temp_63 = vp_c7.data[int(temp_61)][temp_62];
    // 0x000228: 0x4C68101000870E16 Fmul
    temp_64 = temp_16 * vp_c4.data[2].x;
    // 0x000230: 0x49A0099000170C0E Ffma
    temp_65 = fma(temp_13, vp_c4.data[0].y, temp_38);
    // 0x000238: 0x4C68101000071017 Fmul
    temp_66 = temp_40 * vp_c4.data[0].x;
    // 0x000248: 0x49A00A9000570C15 Ffma
    temp_67 = fma(temp_13, vp_c4.data[1].y, temp_33);
    // 0x000250: 0x59A2090000D70C0F Ffma
    temp_68 = 0.0 - temp_54;
    temp_69 = fma(temp_13, temp_9, temp_68);
    // 0x000258: 0xEF9400704887110D Ldc
    temp_70 = temp_20 + 0x488;
    temp_71 = uint(temp_70) >> 2;
    temp_72 = temp_71 >> 2;
    temp_73 = int(temp_71) & 3;
    temp_74 = vp_c7.data[int(temp_72)][temp_73];
    // 0x000268: 0x59A005000147FF12 Ffma
    temp_75 = fma(0.0, temp_39, temp_5);
    // 0x000270: 0x49A007100027070A Ffma
    temp_76 = fma(temp_11, vp_c4.data[0].z, temp_65);
    // 0x000278: 0x49A00B9000170917 Ffma
    temp_77 = fma(temp_44, vp_c4.data[0].y, temp_66);
    // 0x000288: 0x4C68101000871014 Fmul
    temp_78 = temp_40 * vp_c4.data[2].x;
    // 0x000290: 0x4C68101000471010 Fmul
    temp_79 = temp_40 * vp_c4.data[1].x;
    // 0x000298: 0x49A00B1000970C16 Ffma
    temp_80 = fma(temp_13, vp_c4.data[2].y, temp_64);
    // 0x0002A8: 0x49A00A900067070C Ffma
    temp_81 = fma(temp_11, vp_c4.data[1].z, temp_67);
    // 0x0002B0: 0x5C68100000A70A13 Fmul
    temp_82 = temp_76 * temp_76;
    // 0x0002B8: 0xEF9400706887110E Ldc
    temp_83 = temp_20 + 0x688;
    temp_84 = uint(temp_83) >> 2;
    temp_85 = temp_84 >> 2;
    temp_86 = int(temp_84) & 3;
    temp_87 = vp_c7.data[int(temp_85)][temp_86];
    // 0x0002C8: 0x49A00B9000271217 Ffma
    temp_88 = fma(temp_75, vp_c4.data[0].z, temp_77);
    // 0x0002D0: 0x49A00A1000970914 Ffma
    temp_89 = fma(temp_44, vp_c4.data[2].y, temp_78);
    // 0x0002D8: 0x49A0081000570910 Ffma
    temp_90 = fma(temp_44, vp_c4.data[1].y, temp_79);
    // 0x0002E8: 0x49A00B1000A70707 Ffma
    temp_91 = fma(temp_11, vp_c4.data[2].z, temp_80);
    // 0x0002F0: 0x59A0098000C70C09 Ffma
    temp_92 = fma(temp_81, temp_81, temp_82);
    // 0x0002F8: 0x4C58101000371717 Fadd
    temp_93 = temp_88 + vp_c4.data[0].w;
    // 0x000308: 0x5C68100000670B0B Fmul
    temp_94 = temp_43 * temp_41;
    // 0x000310: 0x49A0081000671210 Ffma
    temp_95 = fma(temp_75, vp_c4.data[1].z, temp_90);
    // 0x000318: 0x49A00A1000A71214 Ffma
    temp_96 = fma(temp_75, vp_c4.data[2].z, temp_89);
    // 0x000328: 0x5C68100000670808 Fmul
    temp_97 = temp_32 * temp_41;
    // 0x000330: 0x59A0048000770709 Ffma
    temp_98 = fma(temp_91, temp_91, temp_92);
    // 0x000338: 0x59A0010000071700 Ffma
    temp_99 = fma(temp_93, temp_59, temp_49);
    // 0x000348: 0xEFD87F801007FF02 Ald
    temp_100 = in_attr8.x;
    // 0x000350: 0x4C68101000470B12 Fmul
    temp_101 = temp_94 * vp_c4.data[1].x;
    // 0x000358: 0x5080000000570909 Mufu
    temp_102 = inversesqrt(temp_98);
    // 0x000368: 0x4C58101000771010 Fadd
    temp_103 = temp_95 + vp_c4.data[1].w;
    // 0x000370: 0xEFF07F800D07FF00 Ast
    out_attr5.x = temp_99;
    // 0x000378: 0x4C68101000070B11 Fmul
    temp_104 = temp_94 * vp_c4.data[0].x;
    // 0x000388: 0x4C68101000870B0B Fmul
    temp_105 = temp_94 * vp_c4.data[2].x;
    // 0x000390: 0x5C68100000670F0F Fmul
    temp_106 = temp_69 * temp_41;
    // 0x000398: 0x49A0091000570812 Ffma
    temp_107 = fma(temp_97, vp_c4.data[1].y, temp_101);
    // 0x0003A8: 0x4C58101000B71414 Fadd
    temp_108 = temp_96 + vp_c4.data[2].w;
    // 0x0003B0: 0x59A0018000171001 Ffma
    temp_109 = fma(temp_103, temp_63, temp_53);
    // 0x0003B8: 0x4C5830180B070003 Fadd
    temp_110 = 0.0 - vp_c6.data[44].x;
    temp_111 = temp_99 + temp_110;
    // 0x0003C8: 0xEFF07F800D47FF01 Ast
    out_attr5.y = temp_109;
    // 0x0003D0: 0x49A0089000170811 Ffma
    temp_112 = fma(temp_97, vp_c4.data[0].y, temp_104);
    // 0x0003D8: 0x49A0059000970810 Ffma
    temp_113 = fma(temp_97, vp_c4.data[2].y, temp_105);
    // 0x0003E8: 0x49A0091000670F08 Ffma
    temp_114 = fma(temp_106, vp_c4.data[1].z, temp_107);
    // 0x0003F0: 0x4C5830180B17010B Fadd
    temp_115 = 0.0 - vp_c6.data[44].y;
    temp_116 = temp_109 + temp_115;
    // 0x0003F8: 0x59A0070000D7140D Ffma
    temp_117 = fma(temp_108, temp_74, temp_87);
    // 0x000408: 0x4C68101803870312 Fmul
    temp_118 = temp_111 * vp_c6.data[14].x;
    // 0x000410: 0xEFF07F800D87FF0D Ast
    out_attr5.z = temp_117;
    // 0x000418: 0x5C68100000970707 Fmul
    temp_119 = temp_91 * temp_102;
    // 0x000428: 0x49A0089000270F0E Ffma
    temp_120 = fma(temp_106, vp_c4.data[0].z, temp_112);
    // 0x000430: 0xEFF07F800987FF07 Ast
    out_attr1.z = temp_119;
    // 0x000438: 0x5C68100000970A0A Fmul
    temp_121 = temp_76 * temp_102;
    // 0x000448: 0x5C68100000970C0C Fmul
    temp_122 = temp_81 * temp_102;
    // 0x000450: 0xEFF07F800907FF0A Ast
    out_attr1.x = temp_121;
    // 0x000458: 0x49A0091803970B12 Ffma
    temp_123 = fma(temp_116, vp_c6.data[14].y, temp_118);
    // 0x000468: 0xEFF07F800947FF0C Ast
    out_attr1.y = temp_122;
    // 0x000470: 0x49A0081000A70F0F Ffma
    temp_124 = fma(temp_106, vp_c4.data[2].z, temp_113);
    // 0x000478: 0x5C68100000870709 Fmul
    temp_125 = temp_119 * temp_114;
    // 0x000488: 0x4C5830180B270D03 Fadd
    temp_126 = 0.0 - vp_c6.data[44].z;
    temp_127 = temp_117 + temp_126;
    // 0x000490: 0x49A002940007020B Ffma
    temp_128 = fma(temp_100, vp_c5.data[0].x, temp_37);
    // 0x000498: 0x4C5810180BA70D05 Fadd
    temp_129 = temp_117 + vp_c6.data[46].z;
    // 0x0004A8: 0xEFF07F800E07FF0B Ast
    out_attr6.x = temp_128;
    // 0x0004B0: 0x49A0021400170214 Ffma
    temp_130 = fma(temp_100, vp_c5.data[0].y, temp_30);
    // 0x0004B8: 0x59A2048000F70C04 Ffma
    temp_131 = 0.0 - temp_125;
    temp_132 = fma(temp_122, temp_124, temp_131);
    // 0x0004C8: 0xEFF07F800E47FF14 Ast
    out_attr6.y = temp_130;
    // 0x0004D0: 0x49A0091803A70312 Ffma
    temp_133 = fma(temp_127, vp_c6.data[14].z, temp_123);
    // 0x0004D8: 0x4C5810180B970103 Fadd
    temp_134 = temp_109 + vp_c6.data[46].y;
    // 0x0004E8: 0x4C6810180C270509 Fmul
    temp_135 = temp_129 * vp_c6.data[48].z;
    // 0x0004F0: 0x5C68100000F70A10 Fmul
    temp_136 = temp_121 * temp_124;
    // 0x0004F8: 0x4C5810180B870002 Fadd
    temp_137 = temp_99 + vp_c6.data[46].x;
    // 0x000508: 0x5C68100000670404 Fmul
    temp_138 = temp_132 * temp_41;
    // 0x000510: 0x4C6810180C670511 Fmul
    temp_139 = temp_129 * vp_c6.data[49].z;
    // 0x000518: 0x4C98079803C70017 Mov
    // 0x000528: 0x49A004980C17030B Ffma
    temp_140 = fma(temp_134, vp_c6.data[48].y, temp_135);
    // 0x000530: 0x5C68100000E70C09 Fmul
    temp_141 = temp_122 * temp_120;
    // 0x000538: 0x59A2080000E70710 Ffma
    temp_142 = 0.0 - temp_136;
    temp_143 = fma(temp_119, temp_120, temp_142);
    // 0x000548: 0x5C6810000047040E Fmul
    temp_144 = temp_138 * temp_138;
    // 0x000550: 0x49A008980C570311 Ffma
    temp_145 = fma(temp_134, vp_c6.data[49].y, temp_139);
    // 0x000558: 0x4C58300C02F7000F Fadd
    temp_146 = 0.0 - vp_c3.data[11].w;
    temp_147 = temp_99 + temp_146;
    // 0x000568: 0x49A005980C07020B Ffma
    temp_148 = fma(temp_137, vp_c6.data[48].x, temp_140);
    // 0x000570: 0xEFF07F800B07FF0F Ast
    out_attr3.x = temp_147;
    // 0x000578: 0x59A2048000870A09 Ffma
    temp_149 = 0.0 - temp_141;
    temp_150 = fma(temp_121, temp_114, temp_149);
    // 0x000588: 0x5C68100000671008 Fmul
    temp_151 = temp_143 * temp_41;
    // 0x000590: 0x49A008980C470211 Ffma
    temp_152 = fma(temp_137, vp_c6.data[49].x, temp_145);
    // 0x000598: 0x4C58300C03370113 Fadd
    temp_153 = 0.0 - vp_c3.data[12].w;
    temp_154 = temp_109 + temp_153;
    // 0x0005A8: 0x4C68100C00870010 Fmul
    temp_155 = temp_99 * vp_c3.data[2].x;
    // 0x0005B0: 0xEFF07F800B47FF13 Ast
    out_attr3.y = temp_154;
    // 0x0005B8: 0x4C6810180BB70B14 Fmul
    temp_156 = temp_148 * vp_c6.data[46].w;
    // 0x0005C8: 0x5C6810000067090B Fmul
    temp_157 = temp_150 * temp_41;
    // 0x0005D0: 0xEFF07F801107FF14 Ast
    out_attr9.x = temp_156;
    // 0x0005D8: 0x59A007000087080E Ffma
    temp_158 = fma(temp_151, temp_151, temp_144);
    // 0x0005E8: 0x51A00B9803B7120F Ffma
    temp_159 = fma(temp_133, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x0005F0: 0x4C6810180BB71111 Fmul
    temp_160 = temp_152 * vp_c6.data[46].w;
    // 0x0005F8: 0xEFF07F801047FF0F Ast
    out_attr8.y = temp_159;
    // 0x000608: 0x59A0070000B70B0E Ffma
    temp_161 = fma(temp_157, temp_157, temp_158);
    // 0x000610: 0xEFF07F801147FF11 Ast
    out_attr9.y = temp_160;
    // 0x000618: 0x4C68100C00070012 Fmul
    temp_162 = temp_99 * vp_c3.data[0].x;
    // 0x000628: 0x5080000000570E0E Mufu
    temp_163 = inversesqrt(temp_161);
    // 0x000630: 0x4C68100C00470013 Fmul
    temp_164 = temp_99 * vp_c3.data[1].x;
    // 0x000638: 0x4C58101002070D0F Fadd
    temp_165 = temp_117 + vp_c4.data[8].x;
    // 0x000648: 0x49A0080C00970110 Ffma
    temp_166 = fma(temp_109, vp_c3.data[2].y, temp_155);
    // 0x000650: 0x4C58300C03770D15 Fadd
    temp_167 = 0.0 - vp_c3.data[13].w;
    temp_168 = temp_117 + temp_167;
    // 0x000658: 0x4C6810180CA70511 Fmul
    temp_169 = temp_129 * vp_c6.data[50].z;
    // 0x000668: 0xEFF07F800B87FF15 Ast
    out_attr3.z = temp_168;
    // 0x000670: 0x49A0090C00170112 Ffma
    temp_170 = fma(temp_109, vp_c3.data[0].y, temp_162);
    // 0x000678: 0x49A0098C00570114 Ffma
    temp_171 = fma(temp_109, vp_c3.data[1].y, temp_164);
    // 0x000688: 0x49A0080C00A70F05 Ffma
    temp_172 = fma(temp_165, vp_c3.data[2].z, temp_166);
    // 0x000690: 0x49A0080C00A70D10 Ffma
    temp_173 = fma(temp_117, vp_c3.data[2].z, temp_166);
    // 0x000698: 0x5C68100000E70B01 Fmul
    temp_174 = temp_157 * temp_163;
    // 0x0006A8: 0x49A008980C970303 Ffma
    temp_175 = fma(temp_134, vp_c6.data[50].y, temp_169);
    // 0x0006B0: 0xEFF07F800887FF01 Ast
    out_attr0.z = temp_174;
    // 0x0006B8: 0x5C68100000E70411 Fmul
    temp_176 = temp_138 * temp_163;
    // 0x0006C8: 0x49A0090C00270F09 Ffma
    temp_177 = fma(temp_165, vp_c3.data[0].z, temp_170);
    // 0x0006D0: 0xEFF07F800807FF11 Ast
    out_attr0.x = temp_176;
    // 0x0006D8: 0x49A0090C00270D12 Ffma
    temp_178 = fma(temp_117, vp_c3.data[0].z, temp_170);
    // 0x0006E8: 0x5C68100000E70808 Fmul
    temp_179 = temp_151 * temp_163;
    // 0x0006F0: 0x49A001980C87020B Ffma
    temp_180 = fma(temp_137, vp_c6.data[50].x, temp_175);
    // 0x0006F8: 0xEFF07F800847FF08 Ast
    out_attr0.y = temp_179;
    // 0x000708: 0x5C68100000170C0E Fmul
    temp_181 = temp_122 * temp_174;
    // 0x000710: 0x5C68100001170703 Fmul
    temp_182 = temp_119 * temp_176;
    // 0x000718: 0x49A00A0C00670F00 Ffma
    temp_183 = fma(temp_165, vp_c3.data[1].z, temp_171);
    // 0x000728: 0x4C58100C00370909 Fadd
    temp_184 = temp_177 + vp_c3.data[0].w;
    // 0x000730: 0x49A00A0C00670D14 Ffma
    temp_185 = fma(temp_117, vp_c3.data[1].z, temp_171);
    // 0x000738: 0x4C58100C00371212 Fadd
    temp_186 = temp_178 + vp_c3.data[0].w;
    // 0x000748: 0x59A2070000870704 Ffma
    temp_187 = 0.0 - temp_181;
    temp_188 = fma(temp_119, temp_179, temp_187);
    // 0x000750: 0x5C68100000870A02 Fmul
    temp_189 = temp_121 * temp_179;
    // 0x000758: 0x59A2018000170A03 Ffma
    temp_190 = 0.0 - temp_182;
    temp_191 = fma(temp_121, temp_174, temp_190);
    // 0x000768: 0x4C58100C00770000 Fadd
    temp_192 = temp_183 + vp_c3.data[1].w;
    // 0x000770: 0x4C68100C02470907 Fmul
    temp_193 = temp_184 * vp_c3.data[9].x;
    // 0x000778: 0x4C68100C01C70901 Fmul
    temp_194 = temp_184 * vp_c3.data[7].x;
    // 0x000788: 0x4C68100C0287090A Fmul
    temp_195 = temp_184 * vp_c3.data[10].x;
    // 0x000790: 0x4C58100C00771414 Fadd
    temp_196 = temp_185 + vp_c3.data[1].w;
    // 0x000798: 0x4C68101802C71212 Fmul
    temp_197 = temp_186 * vp_c6.data[11].x;
    // 0x0007A8: 0x4C68100C02070909 Fmul
    temp_198 = temp_184 * vp_c3.data[8].x;
    // 0x0007B0: 0x59A2010001170C0C Ffma
    temp_199 = 0.0 - temp_189;
    temp_200 = fma(temp_122, temp_176, temp_199);
    // 0x0007B8: 0x49A0038C02570007 Ffma
    temp_201 = fma(temp_192, vp_c3.data[9].y, temp_193);
    // 0x0007C8: 0x49A0008C01D70002 Ffma
    temp_202 = fma(temp_192, vp_c3.data[7].y, temp_194);
    // 0x0007D0: 0x49A0050C0297000A Ffma
    temp_203 = fma(temp_192, vp_c3.data[10].y, temp_195);
    // 0x0007D8: 0x4C58100C00B71010 Fadd
    temp_204 = temp_173 + vp_c3.data[2].w;
    // 0x0007E8: 0x49A0091802D71412 Ffma
    temp_205 = fma(temp_196, vp_c6.data[11].y, temp_197);
    // 0x0007F0: 0xEFF07F800C87FF10 Ast
    out_attr4.z = temp_204;
    // 0x0007F8: 0x4C58100C00B70505 Fadd
    temp_206 = temp_172 + vp_c3.data[2].w;
    // 0x000808: 0x49A0048C02170000 Ffma
    temp_207 = fma(temp_192, vp_c3.data[8].y, temp_198);
    // 0x000810: 0x4C98079803070008 Mov
    // 0x000818: 0x4C6810180BB70B0B Fmul
    temp_208 = temp_180 * vp_c6.data[46].w;
    // 0x000828: 0x5C68100000670404 Fmul
    temp_209 = temp_188 * temp_41;
    // 0x000830: 0xEFF07F801187FF0B Ast
    out_attr9.z = temp_208;
    // 0x000838: 0x49A0091802E71012 Ffma
    temp_210 = fma(temp_204, vp_c6.data[11].z, temp_205);
    // 0x000848: 0xEFF07F800A07FF04 Ast
    out_attr2.x = temp_209;
    // 0x000850: 0x49A0038C02670507 Ffma
    temp_211 = fma(temp_206, vp_c3.data[9].z, temp_201);
    // 0x000858: 0x49A0010C01E70502 Ffma
    temp_212 = fma(temp_206, vp_c3.data[7].z, temp_202);
    // 0x000868: 0x49A0050C02A7050A Ffma
    temp_213 = fma(temp_206, vp_c3.data[10].z, temp_203);
    // 0x000870: 0x49A0000C02270500 Ffma
    temp_214 = fma(temp_206, vp_c3.data[8].z, temp_207);
    // 0x000878: 0x5C68100000670303 Fmul
    temp_215 = temp_191 * temp_41;
    // 0x000888: 0x5C68100000670C0C Fmul
    temp_216 = temp_200 * temp_41;
    // 0x000890: 0xEFF07F800A47FF03 Ast
    out_attr2.y = temp_215;
    // 0x000898: 0x51A0041802F71212 Ffma
    temp_217 = fma(temp_210, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x0008A8: 0xEFF07F800A87FF0C Ast
    out_attr2.z = temp_216;
    // 0x0008B0: 0x4C58100C02770707 Fadd
    temp_218 = temp_211 + vp_c3.data[9].w;
    // 0x0008B8: 0xEFF07F801007FF12 Ast
    out_attr8.x = temp_217;
    // 0x0008C8: 0x4C58100C01F70202 Fadd
    temp_219 = temp_212 + vp_c3.data[7].w;
    // 0x0008D0: 0xEFF07F800787FF07 Ast
    gl_Position.z = temp_218;
    // 0x0008D8: 0x4C58100C02B70A0A Fadd
    temp_220 = temp_213 + vp_c3.data[10].w;
    // 0x0008E8: 0xEFF07F800707FF02 Ast
    gl_Position.x = temp_219;
    // 0x0008F0: 0x4C58100C02370000 Fadd
    temp_221 = temp_214 + vp_c3.data[8].w;
    // 0x0008F8: 0xEFF07F8007C7FF0A Ast
    gl_Position.w = temp_220;
    // 0x000908: 0xEFF07F800747FF00 Ast
    gl_Position.y = temp_221;
    // 0x000910: 0xE30000000007000F Exit
    return;
}
