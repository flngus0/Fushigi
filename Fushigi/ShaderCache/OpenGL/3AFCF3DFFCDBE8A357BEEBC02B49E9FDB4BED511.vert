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

layout (binding = 9, std140) uniform _vp_c8
{
    precise vec4 data[4096];
} vp_c8;

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

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 6) in vec4 in_attr6;
layout (location = 8) in vec4 in_attr8;
layout (location = 9) in vec4 in_attr9;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;
layout (location = 7) out vec4 out_attr7;


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
    precise float temp_8;
    int temp_9;
    int temp_10;
    int temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    uint temp_17;
    int temp_18;
    int temp_19;
    int temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    int temp_24;
    int temp_25;
    uint temp_26;
    uint temp_27;
    int temp_28;
    precise float temp_29;
    int temp_30;
    uint temp_31;
    int temp_32;
    precise float temp_33;
    uint temp_34;
    uint temp_35;
    int temp_36;
    precise float temp_37;
    int temp_38;
    uint temp_39;
    int temp_40;
    precise float temp_41;
    int temp_42;
    uint temp_43;
    uint temp_44;
    int temp_45;
    precise float temp_46;
    int temp_47;
    uint temp_48;
    int temp_49;
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
    int temp_67;
    precise float temp_68;
    int temp_69;
    uint temp_70;
    uint temp_71;
    int temp_72;
    precise float temp_73;
    int temp_74;
    uint temp_75;
    int temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    int temp_86;
    uint temp_87;
    uint temp_88;
    int temp_89;
    precise float temp_90;
    int temp_91;
    uint temp_92;
    int temp_93;
    precise float temp_94;
    int temp_95;
    uint temp_96;
    uint temp_97;
    int temp_98;
    precise float temp_99;
    int temp_100;
    uint temp_101;
    int temp_102;
    precise float temp_103;
    int temp_104;
    uint temp_105;
    uint temp_106;
    int temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    int temp_115;
    uint temp_116;
    uint temp_117;
    int temp_118;
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
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x010000000107F006 Mov32i
    // 0x000010: 0xEFD87F800E07FF00 Ald
    temp_0 = in_attr6.x;
    // 0x000018: 0x4CB0119002371A26 F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000028: 0x4C98079400A70008 Mov
    // 0x000030: 0xEFD87F801047FF07 Ald
    temp_3 = in_attr8.y;
    // 0x000038: 0x4C98079400B70012 Mov
    // 0x000048: 0xEFD87F801007FF10 Ald
    temp_4 = in_attr8.x;
    // 0x000050: 0x4C98079400270019 Mov
    // 0x000058: 0xEFD87F801147FF14 Ald
    temp_5 = in_attr9.y;
    // 0x000068: 0x4C98079400370009 Mov
    // 0x000070: 0xEFD87F800807FF15 Ald
    temp_6 = in_attr0.x;
    // 0x000078: 0x4C98079401270016 Mov
    // 0x000088: 0xEFD87F801107FF11 Ald
    temp_7 = in_attr9.x;
    // 0x000090: 0x4C98079401370013 Mov
    // 0x000098: 0xEFD87F800847FF1C Ald
    temp_8 = in_attr0.y;
    // 0x0000A8: 0x3600030003070006 Xmad
    temp_9 = floatBitsToInt(temp_0) & 0xFFFF;
    temp_10 = temp_9 * 48;
    temp_11 = temp_10 + 16;
    // 0x0000B0: 0xEFD87F800A07FF22 Ald
    temp_12 = in_attr2.x;
    // 0x0000B8: 0x51A0041400C70717 Ffma
    temp_13 = fma(temp_3, vp_c5.data[2].z, vp_c5.data[3].x);
    // 0x0000C8: 0xEFD87F800907FF21 Ald
    temp_14 = in_attr1.x;
    // 0x0000D0: 0x51A0091400D70712 Ffma
    temp_15 = fma(temp_3, vp_c5.data[2].w, vp_c5.data[3].y);
    // 0x0000D8: 0xEFD87F800887FF1D Ald
    temp_16 = in_attr0.z;
    // 0x0000E8: 0x3620031003070006 Xmad
    temp_17 = floatBitsToUint(temp_0) >> 16;
    temp_18 = int(temp_17) * 48;
    temp_19 = temp_18 << 16;
    temp_20 = temp_19 + temp_11;
    // 0x0000F0: 0xEFD87F800A47FF1E Ald
    temp_21 = in_attr2.y;
    // 0x0000F8: 0x51A00C9400470719 Ffma
    temp_22 = fma(temp_3, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000108: 0xEFD87F800947FF1A Ald
    temp_23 = in_attr1.y;
    // 0x000110: 0x3848000000472626 Shl
    temp_24 = temp_2 << 4;
    // 0x000118: 0xEF95008FFF070600 Ldc
    temp_25 = temp_20 + -16;
    temp_26 = uint(temp_25) >> 2;
    temp_27 = temp_26 >> 2;
    temp_28 = int(temp_26) & 3;
    temp_29 = vp_c8.data[int(temp_27)][temp_28];
    temp_30 = int(temp_26) + 1;
    temp_31 = uint(temp_30) >> 2;
    temp_32 = temp_30 & 3;
    temp_33 = vp_c8.data[int(temp_31)][temp_32];
    // 0x000128: 0xEF9500800007060C Ldc
    temp_34 = uint(temp_20) >> 2;
    temp_35 = temp_34 >> 2;
    temp_36 = int(temp_34) & 3;
    temp_37 = vp_c8.data[int(temp_35)][temp_36];
    temp_38 = int(temp_34) + 1;
    temp_39 = uint(temp_38) >> 2;
    temp_40 = temp_38 & 3;
    temp_41 = vp_c8.data[int(temp_39)][temp_40];
    // 0x000130: 0xEF95008001070604 Ldc
    temp_42 = temp_20 + 16;
    temp_43 = uint(temp_42) >> 2;
    temp_44 = temp_43 >> 2;
    temp_45 = int(temp_43) & 3;
    temp_46 = vp_c8.data[int(temp_44)][temp_45];
    temp_47 = int(temp_43) + 1;
    temp_48 = uint(temp_47) >> 2;
    temp_49 = temp_47 & 3;
    temp_50 = vp_c8.data[int(temp_48)][temp_49];
    // 0x000138: 0xEF95008FFF87060E Ldc
    temp_51 = temp_20 + -8;
    temp_52 = uint(temp_51) >> 2;
    temp_53 = temp_52 >> 2;
    temp_54 = int(temp_52) & 3;
    temp_55 = vp_c8.data[int(temp_53)][temp_54];
    temp_56 = int(temp_52) + 1;
    temp_57 = uint(temp_56) >> 2;
    temp_58 = temp_56 & 3;
    temp_59 = vp_c8.data[int(temp_57)][temp_58];
    // 0x000148: 0xEF9500800087060A Ldc
    temp_60 = temp_20 + 8;
    temp_61 = uint(temp_60) >> 2;
    temp_62 = temp_61 >> 2;
    temp_63 = int(temp_61) & 3;
    temp_64 = vp_c8.data[int(temp_62)][temp_63];
    temp_65 = int(temp_61) + 1;
    temp_66 = uint(temp_65) >> 2;
    temp_67 = temp_65 & 3;
    temp_68 = vp_c8.data[int(temp_66)][temp_67];
    // 0x000150: 0xEF95008001870602 Ldc
    temp_69 = temp_20 + 24;
    temp_70 = uint(temp_69) >> 2;
    temp_71 = temp_70 >> 2;
    temp_72 = int(temp_70) & 3;
    temp_73 = vp_c8.data[int(temp_71)][temp_72];
    temp_74 = int(temp_70) + 1;
    temp_75 = uint(temp_74) >> 2;
    temp_76 = temp_74 & 3;
    temp_77 = vp_c8.data[int(temp_75)][temp_76];
    // 0x000158: 0x51A0049400570707 Ffma
    temp_78 = fma(temp_3, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000168: 0x49A00B9400871017 Ffma
    temp_79 = fma(temp_4, vp_c5.data[2].x, temp_13);
    // 0x000170: 0x49A0091400971012 Ffma
    temp_80 = fma(temp_4, vp_c5.data[2].y, temp_15);
    // 0x000178: 0x49A00C9400071019 Ffma
    temp_81 = fma(temp_4, vp_c5.data[0].x, temp_22);
    // 0x000188: 0x51A00B1401471416 Ffma
    temp_82 = fma(temp_5, vp_c5.data[4].z, vp_c5.data[5].x);
    // 0x000190: 0x51A0099401571414 Ffma
    temp_83 = fma(temp_5, vp_c5.data[4].w, vp_c5.data[5].y);
    // 0x000198: 0xEFD87F800A87FF13 Ald
    temp_84 = in_attr2.z;
    // 0x0001A8: 0x49A0039400171010 Ffma
    temp_85 = fma(temp_4, vp_c5.data[0].y, temp_78);
    // 0x0001B0: 0xEF95007068072608 Ldc
    temp_86 = temp_24 + 0x680;
    temp_87 = uint(temp_86) >> 2;
    temp_88 = temp_87 >> 2;
    temp_89 = int(temp_87) & 3;
    temp_90 = vp_c7.data[int(temp_88)][temp_89];
    temp_91 = int(temp_87) + 1;
    temp_92 = uint(temp_91) >> 2;
    temp_93 = temp_91 & 3;
    temp_94 = vp_c7.data[int(temp_92)][temp_93];
    // 0x0001B8: 0xEF95007048072606 Ldc
    temp_95 = temp_24 + 0x480;
    temp_96 = uint(temp_95) >> 2;
    temp_97 = temp_96 >> 2;
    temp_98 = int(temp_96) & 3;
    temp_99 = vp_c7.data[int(temp_97)][temp_98];
    temp_100 = int(temp_96) + 1;
    temp_101 = uint(temp_100) >> 2;
    temp_102 = temp_100 & 3;
    temp_103 = vp_c7.data[int(temp_101)][temp_102];
    // 0x0001C8: 0xEF94007048872618 Ldc
    temp_104 = temp_24 + 0x488;
    temp_105 = uint(temp_104) >> 2;
    temp_106 = temp_105 >> 2;
    temp_107 = int(temp_105) & 3;
    temp_108 = vp_c7.data[int(temp_106)][temp_107];
    // 0x0001D0: 0x49A00B1401071116 Ffma
    temp_109 = fma(temp_7, vp_c5.data[4].x, temp_82);
    // 0x0001D8: 0x49A00A1401171111 Ffma
    temp_110 = fma(temp_7, vp_c5.data[4].y, temp_83);
    // 0x0001E8: 0xEFD87F800987FF14 Ald
    temp_111 = in_attr1.z;
    // 0x0001F0: 0x5C68100001570023 Fmul
    temp_112 = temp_29 * temp_6;
    // 0x0001F8: 0x5C68100001570C1B Fmul
    temp_113 = temp_37 * temp_6;
    // 0x000208: 0x5C6810000157041F Fmul
    temp_114 = temp_46 * temp_6;
    // 0x000210: 0xEF94007068872615 Ldc
    temp_115 = temp_24 + 0x688;
    temp_116 = uint(temp_115) >> 2;
    temp_117 = temp_116 >> 2;
    temp_118 = int(temp_116) & 3;
    temp_119 = vp_c7.data[int(temp_117)][temp_118];
    // 0x000218: 0x5C68100002270C20 Fmul
    temp_120 = temp_37 * temp_12;
    // 0x000228: 0x5C68100002270424 Fmul
    temp_121 = temp_46 * temp_12;
    // 0x000230: 0x5C68100002170C0C Fmul
    temp_122 = temp_37 * temp_14;
    // 0x000238: 0x59A0118001C70123 Ffma
    temp_123 = fma(temp_33, temp_8, temp_112);
    // 0x000248: 0x59A00D8001C70D1B Ffma
    temp_124 = fma(temp_41, temp_8, temp_113);
    // 0x000250: 0x59A00F8001C7051C Ffma
    temp_125 = fma(temp_50, temp_8, temp_114);
    // 0x000258: 0x5C6810000227001F Fmul
    temp_126 = temp_29 * temp_12;
    // 0x000268: 0xEFD87F800AC7FF22 Ald
    temp_127 = in_attr2.w;
    // 0x000270: 0x5C68100002170000 Fmul
    temp_128 = temp_29 * temp_14;
    // 0x000278: 0xEFF07F800E47FF10 Ast
    out_attr6.y = temp_85;
    // 0x000288: 0x59A0118001D70E25 Ffma
    temp_129 = fma(temp_55, temp_16, temp_123);
    // 0x000290: 0xEFF07F800E87FF17 Ast
    out_attr6.z = temp_79;
    // 0x000298: 0x5C68100002170404 Fmul
    temp_130 = temp_46 * temp_14;
    // 0x0002A8: 0xEFF07F800EC7FF12 Ast
    out_attr6.w = temp_80;
    // 0x0002B0: 0x59A00F8001E70121 Ffma
    temp_131 = fma(temp_33, temp_21, temp_126);
    // 0x0002B8: 0xEFF07F800E07FF19 Ast
    out_attr6.x = temp_81;
    // 0x0002C8: 0x59A0000001A70101 Ffma
    temp_132 = fma(temp_33, temp_23, temp_128);
    // 0x0002D0: 0xEFF07F800F07FF16 Ast
    out_attr7.x = temp_109;
    // 0x0002D8: 0x59A00D8001D70A00 Ffma
    temp_133 = fma(temp_64, temp_16, temp_124);
    // 0x0002E8: 0xEFF07F800F47FF11 Ast
    out_attr7.y = temp_110;
    // 0x0002F0: 0x5C58100002570F0F Fadd
    temp_134 = temp_59 + temp_129;
    // 0x0002F8: 0x59A00E0001D7021C Ffma
    temp_135 = fma(temp_73, temp_16, temp_125);
    // 0x000308: 0x59A0100001E70D20 Ffma
    temp_136 = fma(temp_41, temp_21, temp_120);
    // 0x000310: 0x59A0060001A70D0D Ffma
    temp_137 = fma(temp_41, temp_23, temp_122);
    // 0x000318: 0x59A0108001370E21 Ffma
    temp_138 = fma(temp_55, temp_84, temp_131);
    // 0x000328: 0x5C58100000070B00 Fadd
    temp_139 = temp_68 + temp_133;
    // 0x000330: 0x59A0040000670F06 Ffma
    temp_140 = fma(temp_134, temp_99, temp_90);
    // 0x000338: 0x5C58100001C70303 Fadd
    temp_141 = temp_77 + temp_135;
    // 0x000348: 0xEFF07F800D07FF06 Ast
    out_attr5.x = temp_140;
    // 0x000350: 0x59A0048000770007 Ffma
    temp_142 = fma(temp_139, temp_103, temp_94);
    // 0x000358: 0x4C68100C00870600 Fmul
    temp_143 = temp_140 * vp_c3.data[2].x;
    // 0x000368: 0xEFF07F800D47FF07 Ast
    out_attr5.y = temp_142;
    // 0x000370: 0x59A0008001470E01 Ffma
    temp_144 = fma(temp_55, temp_111, temp_132);
    // 0x000378: 0x59A0120001E70524 Ffma
    temp_145 = fma(temp_50, temp_21, temp_121);
    // 0x000388: 0x59A0020001A7050B Ffma
    temp_146 = fma(temp_50, temp_23, temp_130);
    // 0x000390: 0x59A0100001370A20 Ffma
    temp_147 = fma(temp_64, temp_84, temp_136);
    // 0x000398: 0x59A00A8001870303 Ffma
    temp_148 = fma(temp_141, temp_108, temp_119);
    // 0x0003A8: 0x49A0000C00970700 Ffma
    temp_149 = fma(temp_142, vp_c3.data[2].y, temp_143);
    // 0x0003B0: 0xEFF07F800D87FF03 Ast
    out_attr5.z = temp_148;
    // 0x0003B8: 0x59A0068001470A0A Ffma
    temp_150 = fma(temp_64, temp_111, temp_137);
    // 0x0003C8: 0x5C68100002172105 Fmul
    temp_151 = temp_138 * temp_138;
    // 0x0003D0: 0x5C68100000170104 Fmul
    temp_152 = temp_144 * temp_144;
    // 0x0003D8: 0x59A0120001370224 Ffma
    temp_153 = fma(temp_73, temp_84, temp_145);
    // 0x0003E8: 0x59A0058001470214 Ffma
    temp_154 = fma(temp_73, temp_111, temp_146);
    // 0x0003F0: 0x49A0000C00A70308 Ffma
    temp_155 = fma(temp_148, vp_c3.data[2].z, temp_149);
    // 0x0003F8: 0x4C58300C02F7060D Fadd
    temp_156 = 0.0 - vp_c3.data[11].w;
    temp_157 = temp_140 + temp_156;
    // 0x000408: 0x59A0028002072005 Ffma
    temp_158 = fma(temp_147, temp_147, temp_151);
    // 0x000410: 0xEFF07F800B07FF0D Ast
    out_attr3.x = temp_157;
    // 0x000418: 0x59A0020000A70A02 Ffma
    temp_159 = fma(temp_150, temp_150, temp_152);
    // 0x000428: 0x4C58100C00B7080C Fadd
    temp_160 = temp_155 + vp_c3.data[2].w;
    // 0x000430: 0x4C68100C00070604 Fmul
    temp_161 = temp_140 * vp_c3.data[0].x;
    // 0x000438: 0xEFF07F800C87FF0C Ast
    out_attr4.z = temp_160;
    // 0x000448: 0x59A0010001471409 Ffma
    temp_162 = fma(temp_154, temp_154, temp_159);
    // 0x000450: 0x59A0028002472408 Ffma
    temp_163 = fma(temp_153, temp_153, temp_158);
    // 0x000458: 0x508000000057090F Mufu
    temp_164 = inversesqrt(temp_162);
    // 0x000468: 0x4C68100C00470605 Fmul
    temp_165 = temp_140 * vp_c3.data[1].x;
    // 0x000470: 0x508000000057080B Mufu
    temp_166 = inversesqrt(temp_163);
    // 0x000478: 0x4C58101002070302 Fadd
    temp_167 = temp_148 + vp_c4.data[8].x;
    // 0x000488: 0x49A0020C00170704 Ffma
    temp_168 = fma(temp_142, vp_c3.data[0].y, temp_161);
    // 0x000490: 0x4C58300C03770310 Fadd
    temp_169 = 0.0 - vp_c3.data[13].w;
    temp_170 = temp_148 + temp_169;
    // 0x000498: 0x4C58300C0337070E Fadd
    temp_171 = 0.0 - vp_c3.data[12].w;
    temp_172 = temp_142 + temp_171;
    // 0x0004A8: 0xEFF07F800B87FF10 Ast
    out_attr3.z = temp_170;
    // 0x0004B0: 0x49A0028C00570705 Ffma
    temp_173 = fma(temp_142, vp_c3.data[1].y, temp_165);
    // 0x0004B8: 0xEFF07F800B47FF0E Ast
    out_attr3.y = temp_172;
    // 0x0004C8: 0x5C68100000F7140D Fmul
    temp_174 = temp_154 * temp_164;
    // 0x0004D0: 0x5C68100000B72020 Fmul
    temp_175 = temp_147 * temp_166;
    // 0x0004D8: 0xEFF07F800887FF0D Ast
    out_attr0.z = temp_174;
    // 0x0004E8: 0x5C68100000F70101 Fmul
    temp_176 = temp_144 * temp_164;
    // 0x0004F0: 0xEFF07F800947FF20 Ast
    out_attr1.y = temp_175;
    // 0x0004F8: 0x5C68100000B72424 Fmul
    temp_177 = temp_153 * temp_166;
    // 0x000508: 0xEFF07F800807FF01 Ast
    out_attr0.x = temp_176;
    // 0x000510: 0x49A0020C00270204 Ffma
    temp_178 = fma(temp_167, vp_c3.data[0].z, temp_168);
    // 0x000518: 0xEFF07F800987FF24 Ast
    out_attr1.z = temp_177;
    // 0x000528: 0x5C68100000F70A0A Fmul
    temp_179 = temp_150 * temp_164;
    // 0x000530: 0x5C68100000D72003 Fmul
    temp_180 = temp_175 * temp_174;
    // 0x000538: 0xEFF07F800847FF0A Ast
    out_attr0.y = temp_179;
    // 0x000548: 0x5C68100000B7210B Fmul
    temp_181 = temp_138 * temp_166;
    // 0x000550: 0x5C68100000172406 Fmul
    temp_182 = temp_177 * temp_176;
    // 0x000558: 0xEFF07F800907FF0B Ast
    out_attr1.x = temp_181;
    // 0x000568: 0x49A0028C00670205 Ffma
    temp_183 = fma(temp_167, vp_c3.data[1].z, temp_173);
    // 0x000570: 0x4C58100C00370404 Fadd
    temp_184 = temp_178 + vp_c3.data[0].w;
    // 0x000578: 0x49A0000C00A70200 Ffma
    temp_185 = fma(temp_167, vp_c3.data[2].z, temp_149);
    // 0x000588: 0x59A2018000A72408 Ffma
    temp_186 = 0.0 - temp_180;
    temp_187 = fma(temp_177, temp_179, temp_186);
    // 0x000590: 0x5C68100000A70B07 Fmul
    temp_188 = temp_181 * temp_179;
    // 0x000598: 0x59A2030000D70B0D Ffma
    temp_189 = 0.0 - temp_182;
    temp_190 = fma(temp_181, temp_174, temp_189);
    // 0x0005A8: 0x4C58100C00770505 Fadd
    temp_191 = temp_183 + vp_c3.data[1].w;
    // 0x0005B0: 0x4C68100C02070402 Fmul
    temp_192 = temp_184 * vp_c3.data[8].x;
    // 0x0005B8: 0x4C68100C02870403 Fmul
    temp_193 = temp_184 * vp_c3.data[10].x;
    // 0x0005C8: 0x4C68100C02470406 Fmul
    temp_194 = temp_184 * vp_c3.data[9].x;
    // 0x0005D0: 0x4C68100C01C70404 Fmul
    temp_195 = temp_184 * vp_c3.data[7].x;
    // 0x0005D8: 0x4C58100C00B70000 Fadd
    temp_196 = temp_185 + vp_c3.data[2].w;
    // 0x0005E8: 0x59A2038000172007 Ffma
    temp_197 = 0.0 - temp_188;
    temp_198 = fma(temp_175, temp_176, temp_197);
    // 0x0005F0: 0x49A0010C02170502 Ffma
    temp_199 = fma(temp_191, vp_c3.data[8].y, temp_192);
    // 0x0005F8: 0x49A0018C02970503 Ffma
    temp_200 = fma(temp_191, vp_c3.data[10].y, temp_193);
    // 0x000608: 0x49A0030C02570506 Ffma
    temp_201 = fma(temp_191, vp_c3.data[9].y, temp_194);
    // 0x000610: 0x49A0020C01D70505 Ffma
    temp_202 = fma(temp_191, vp_c3.data[7].y, temp_195);
    // 0x000618: 0x5C68100002270808 Fmul
    temp_203 = temp_187 * temp_127;
    // 0x000628: 0x5C68100002270D0D Fmul
    temp_204 = temp_190 * temp_127;
    // 0x000630: 0xEFF07F800A07FF08 Ast
    out_attr2.x = temp_203;
    // 0x000638: 0x49A0010C02270002 Ffma
    temp_205 = fma(temp_196, vp_c3.data[8].z, temp_199);
    // 0x000648: 0xEFF07F800A47FF0D Ast
    out_attr2.y = temp_204;
    // 0x000650: 0x49A0018C02A70003 Ffma
    temp_206 = fma(temp_196, vp_c3.data[10].z, temp_200);
    // 0x000658: 0x49A0030C02670006 Ffma
    temp_207 = fma(temp_196, vp_c3.data[9].z, temp_201);
    // 0x000668: 0x49A0028C01E70005 Ffma
    temp_208 = fma(temp_196, vp_c3.data[7].z, temp_202);
    // 0x000670: 0x5C68100002270707 Fmul
    temp_209 = temp_198 * temp_127;
    // 0x000678: 0x4C58100C02370202 Fadd
    temp_210 = temp_205 + vp_c3.data[8].w;
    // 0x000688: 0xEFF07F800A87FF07 Ast
    out_attr2.z = temp_209;
    // 0x000690: 0x4C58100C02B70303 Fadd
    temp_211 = temp_206 + vp_c3.data[10].w;
    // 0x000698: 0xEFF07F800747FF02 Ast
    gl_Position.y = temp_210;
    // 0x0006A8: 0x4C58100C02770606 Fadd
    temp_212 = temp_207 + vp_c3.data[9].w;
    // 0x0006B0: 0xEFF07F8007C7FF03 Ast
    gl_Position.w = temp_211;
    // 0x0006B8: 0x4C58100C01F70505 Fadd
    temp_213 = temp_208 + vp_c3.data[7].w;
    // 0x0006C8: 0xEFF07F800787FF06 Ast
    gl_Position.z = temp_212;
    // 0x0006D0: 0xEFF07F800707FF05 Ast
    gl_Position.x = temp_213;
    // 0x0006D8: 0xE30000000007000F Exit
    return;
}
