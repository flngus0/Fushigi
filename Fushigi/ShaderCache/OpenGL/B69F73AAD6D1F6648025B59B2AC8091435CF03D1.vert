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
layout (location = 6) in vec4 in_attr6;
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
    int temp_7;
    precise float temp_8;
    int temp_9;
    int temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    uint temp_16;
    int temp_17;
    int temp_18;
    int temp_19;
    precise float temp_20;
    precise float temp_21;
    uint temp_22;
    uint temp_23;
    int temp_24;
    precise float temp_25;
    int temp_26;
    uint temp_27;
    int temp_28;
    precise float temp_29;
    precise float temp_30;
    int temp_31;
    uint temp_32;
    uint temp_33;
    int temp_34;
    precise float temp_35;
    int temp_36;
    uint temp_37;
    int temp_38;
    precise float temp_39;
    precise float temp_40;
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
    precise float temp_51;
    int temp_52;
    uint temp_53;
    uint temp_54;
    int temp_55;
    precise float temp_56;
    int temp_57;
    uint temp_58;
    int temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    int temp_63;
    uint temp_64;
    uint temp_65;
    int temp_66;
    precise float temp_67;
    int temp_68;
    uint temp_69;
    int temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    int temp_74;
    uint temp_75;
    uint temp_76;
    int temp_77;
    precise float temp_78;
    int temp_79;
    uint temp_80;
    int temp_81;
    precise float temp_82;
    precise float temp_83;
    int temp_84;
    uint temp_85;
    uint temp_86;
    int temp_87;
    precise float temp_88;
    int temp_89;
    uint temp_90;
    int temp_91;
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
    int temp_103;
    uint temp_104;
    uint temp_105;
    int temp_106;
    precise float temp_107;
    int temp_108;
    uint temp_109;
    int temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    int temp_116;
    uint temp_117;
    uint temp_118;
    int temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    int temp_123;
    uint temp_124;
    uint temp_125;
    int temp_126;
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
    precise float temp_222;
    precise float temp_223;
    precise float temp_224;
    precise float temp_225;
    precise float temp_226;
    precise float temp_227;
    precise float temp_228;
    precise float temp_229;
    precise float temp_230;
    precise float temp_231;
    precise float temp_232;
    precise float temp_233;
    precise float temp_234;
    precise float temp_235;
    precise float temp_236;
    precise float temp_237;
    precise float temp_238;
    precise float temp_239;
    precise float temp_240;
    precise float temp_241;
    precise float temp_242;
    precise float temp_243;
    precise float temp_244;
    precise float temp_245;
    precise float temp_246;
    precise float temp_247;
    precise float temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise float temp_252;
    precise float temp_253;
    precise float temp_254;
    precise float temp_255;
    precise float temp_256;
    precise float temp_257;
    precise float temp_258;
    precise float temp_259;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079400270012 Mov
    // 0x000010: 0xEFD87F800E07FF01 Ald
    temp_0 = in_attr6.x;
    // 0x000018: 0x4C98079400370017 Mov
    // 0x000028: 0xEFD87F801047FF11 Ald
    temp_1 = in_attr8.y;
    // 0x000030: 0x4CB0119002371A1C F2i
    temp_2 = trunc(vp_c4.data[8].w);
    temp_3 = int(temp_2);
    // 0x000038: 0xEFD87F800907FF06 Ald
    temp_4 = in_attr1.x;
    // 0x000048: 0xEFD87F800A87FF19 Ald
    temp_5 = in_attr2.z;
    // 0x000050: 0xEFD87F800947FF1B Ald
    temp_6 = in_attr1.y;
    // 0x000058: 0x3848000000471C1C Shl
    temp_7 = temp_3 << 4;
    // 0x000068: 0xEFD87F800987FF07 Ald
    temp_8 = in_attr1.z;
    // 0x000070: 0x36007F8003070100 Xmad
    temp_9 = floatBitsToInt(temp_0) & 0xFFFF;
    temp_10 = temp_9 * 48;
    // 0x000078: 0xEFD87F800A47FF18 Ald
    temp_11 = in_attr2.y;
    // 0x000088: 0x51A0091400471112 Ffma
    temp_12 = fma(temp_1, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000090: 0xEFD87F800807FF13 Ald
    temp_13 = in_attr0.x;
    // 0x000098: 0x51A00B9400571111 Ffma
    temp_14 = fma(temp_1, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x0000A8: 0xEFD87F800847FF14 Ald
    temp_15 = in_attr0.y;
    // 0x0000B0: 0x3620001003070100 Xmad
    temp_16 = floatBitsToUint(temp_0) >> 16;
    temp_17 = int(temp_16) * 48;
    temp_18 = temp_17 << 16;
    temp_19 = temp_18 + temp_10;
    // 0x0000B8: 0xEFD87F800A07FF01 Ald
    temp_20 = in_attr2.x;
    // 0x0000C8: 0x5C68100001970616 Fmul
    temp_21 = temp_4 * temp_5;
    // 0x0000D0: 0xEF9500800007000A Ldc
    temp_22 = uint(temp_19) >> 2;
    temp_23 = temp_22 >> 2;
    temp_24 = int(temp_22) & 3;
    temp_25 = vp_c8.data[int(temp_23)][temp_24];
    temp_26 = int(temp_22) + 1;
    temp_27 = uint(temp_26) >> 2;
    temp_28 = temp_26 & 3;
    temp_29 = vp_c8.data[int(temp_27)][temp_28];
    // 0x0000D8: 0x5C6810000187071A Fmul
    temp_30 = temp_8 * temp_11;
    // 0x0000E8: 0xEF9500800107000C Ldc
    temp_31 = temp_19 + 16;
    temp_32 = uint(temp_31) >> 2;
    temp_33 = temp_32 >> 2;
    temp_34 = int(temp_32) & 3;
    temp_35 = vp_c8.data[int(temp_33)][temp_34];
    temp_36 = int(temp_32) + 1;
    temp_37 = uint(temp_36) >> 2;
    temp_38 = temp_36 & 3;
    temp_39 = vp_c8.data[int(temp_37)][temp_38];
    // 0x0000F0: 0x59A20D0001B7191A Ffma
    temp_40 = 0.0 - temp_30;
    temp_41 = fma(temp_5, temp_6, temp_40);
    // 0x0000F8: 0xEF95008002070002 Ldc
    temp_42 = temp_19 + 32;
    temp_43 = uint(temp_42) >> 2;
    temp_44 = temp_43 >> 2;
    temp_45 = int(temp_43) & 3;
    temp_46 = vp_c8.data[int(temp_44)][temp_45];
    temp_47 = int(temp_43) + 1;
    temp_48 = uint(temp_47) >> 2;
    temp_49 = temp_47 & 3;
    temp_50 = vp_c8.data[int(temp_48)][temp_49];
    // 0x000108: 0x5C68100000171B15 Fmul
    temp_51 = temp_6 * temp_20;
    // 0x000110: 0xEF9500800087000E Ldc
    temp_52 = temp_19 + 8;
    temp_53 = uint(temp_52) >> 2;
    temp_54 = temp_53 >> 2;
    temp_55 = int(temp_53) & 3;
    temp_56 = vp_c8.data[int(temp_54)][temp_55];
    temp_57 = int(temp_53) + 1;
    temp_58 = uint(temp_57) >> 2;
    temp_59 = temp_57 & 3;
    temp_60 = vp_c8.data[int(temp_58)][temp_59];
    // 0x000118: 0x59A20B0000170716 Ffma
    temp_61 = 0.0 - temp_21;
    temp_62 = fma(temp_8, temp_20, temp_61);
    // 0x000128: 0xEF95008001870008 Ldc
    temp_63 = temp_19 + 24;
    temp_64 = uint(temp_63) >> 2;
    temp_65 = temp_64 >> 2;
    temp_66 = int(temp_64) & 3;
    temp_67 = vp_c8.data[int(temp_65)][temp_66];
    temp_68 = int(temp_64) + 1;
    temp_69 = uint(temp_68) >> 2;
    temp_70 = temp_68 & 3;
    temp_71 = vp_c8.data[int(temp_69)][temp_70];
    // 0x000130: 0x59A20A8000671815 Ffma
    temp_72 = 0.0 - temp_51;
    temp_73 = fma(temp_11, temp_4, temp_72);
    // 0x000138: 0xEF95008002870004 Ldc
    temp_74 = temp_19 + 40;
    temp_75 = uint(temp_74) >> 2;
    temp_76 = temp_75 >> 2;
    temp_77 = int(temp_75) & 3;
    temp_78 = vp_c8.data[int(temp_76)][temp_77];
    temp_79 = int(temp_75) + 1;
    temp_80 = uint(temp_79) >> 2;
    temp_81 = temp_79 & 3;
    temp_82 = vp_c8.data[int(temp_80)][temp_81];
    // 0x000148: 0xEFD87F801007FF1F Ald
    temp_83 = in_attr8.x;
    // 0x000150: 0xEF95007048071C06 Ldc
    temp_84 = temp_7 + 0x480;
    temp_85 = uint(temp_84) >> 2;
    temp_86 = temp_85 >> 2;
    temp_87 = int(temp_85) & 3;
    temp_88 = vp_c7.data[int(temp_86)][temp_87];
    temp_89 = int(temp_85) + 1;
    temp_90 = uint(temp_89) >> 2;
    temp_91 = temp_89 & 3;
    temp_92 = vp_c7.data[int(temp_90)][temp_91];
    // 0x000158: 0xEFD87F800AC7FF10 Ald
    temp_93 = in_attr2.w;
    // 0x000168: 0xEFD87F800887FF17 Ald
    temp_94 = in_attr0.z;
    // 0x000170: 0x5C68100000170A1D Fmul
    temp_95 = temp_25 * temp_20;
    // 0x000178: 0x5C68100001370A21 Fmul
    temp_96 = temp_25 * temp_13;
    // 0x000188: 0x49A0091400071F12 Ffma
    temp_97 = fma(temp_83, vp_c5.data[0].x, temp_12);
    // 0x000190: 0x49A0089400171F11 Ffma
    temp_98 = fma(temp_83, vp_c5.data[0].y, temp_14);
    // 0x000198: 0xEFF07F800E07FF12 Ast
    out_attr6.x = temp_97;
    // 0x0001A8: 0x5C68100000170C22 Fmul
    temp_99 = temp_35 * temp_20;
    // 0x0001B0: 0xEFF07F800E47FF11 Ast
    out_attr6.y = temp_98;
    // 0x0001B8: 0x5C68100001370C1B Fmul
    temp_100 = temp_35 * temp_13;
    // 0x0001C8: 0x59A0108001470B21 Ffma
    temp_101 = fma(temp_29, temp_15, temp_96);
    // 0x0001D0: 0x5C6810000017021E Fmul
    temp_102 = temp_46 * temp_20;
    // 0x0001D8: 0xEF95007068071C00 Ldc
    temp_103 = temp_7 + 0x680;
    temp_104 = uint(temp_103) >> 2;
    temp_105 = temp_104 >> 2;
    temp_106 = int(temp_104) & 3;
    temp_107 = vp_c7.data[int(temp_105)][temp_106];
    temp_108 = int(temp_104) + 1;
    temp_109 = uint(temp_108) >> 2;
    temp_110 = temp_108 & 3;
    temp_111 = vp_c7.data[int(temp_109)][temp_110];
    // 0x0001E8: 0x5C68100001370225 Fmul
    temp_112 = temp_46 * temp_13;
    // 0x0001F0: 0x59A00E8001870B13 Ffma
    temp_113 = fma(temp_29, temp_11, temp_95);
    // 0x0001F8: 0x59A0110001870D22 Ffma
    temp_114 = fma(temp_39, temp_11, temp_99);
    // 0x000208: 0x59A00D8001470D1D Ffma
    temp_115 = fma(temp_39, temp_15, temp_100);
    // 0x000210: 0xEF94007048871C1B Ldc
    temp_116 = temp_7 + 0x488;
    temp_117 = uint(temp_116) >> 2;
    temp_118 = temp_117 >> 2;
    temp_119 = int(temp_117) & 3;
    temp_120 = vp_c7.data[int(temp_118)][temp_119];
    // 0x000218: 0x5C68100001071A1F Fmul
    temp_121 = temp_41 * temp_93;
    // 0x000228: 0x59A00F0001870323 Ffma
    temp_122 = fma(temp_50, temp_11, temp_102);
    // 0x000230: 0xEF94007068871C18 Ldc
    temp_123 = temp_7 + 0x688;
    temp_124 = uint(temp_123) >> 2;
    temp_125 = temp_124 >> 2;
    temp_126 = int(temp_124) & 3;
    temp_127 = vp_c7.data[int(temp_125)][temp_126];
    // 0x000238: 0x59A0108001770E21 Ffma
    temp_128 = fma(temp_56, temp_94, temp_101);
    // 0x000248: 0x59A012800147031E Ffma
    temp_129 = fma(temp_50, temp_15, temp_112);
    // 0x000250: 0x5C68100001071616 Fmul
    temp_130 = temp_62 * temp_93;
    // 0x000258: 0x59A0098001970E13 Ffma
    temp_131 = fma(temp_56, temp_5, temp_113);
    // 0x000268: 0x5C68100001F70A20 Fmul
    temp_132 = temp_25 * temp_121;
    // 0x000270: 0x59A00E800177080A Ffma
    temp_133 = fma(temp_67, temp_94, temp_115);
    // 0x000278: 0x5C58100002170F0F Fadd
    temp_134 = temp_60 + temp_128;
    // 0x000288: 0x59A00F000177041E Ffma
    temp_135 = fma(temp_78, temp_94, temp_129);
    // 0x000290: 0x5C68100001F7021C Fmul
    temp_136 = temp_46 * temp_121;
    // 0x000298: 0x5C68100001F70C0C Fmul
    temp_137 = temp_35 * temp_121;
    // 0x0002A8: 0x5C68100001071515 Fmul
    temp_138 = temp_73 * temp_93;
    // 0x0002B0: 0x5C58100000A7090A Fadd
    temp_139 = temp_71 + temp_133;
    // 0x0002B8: 0x59A0110001970814 Ffma
    temp_140 = fma(temp_67, temp_5, temp_114);
    // 0x0002C8: 0x5C58100001E70505 Fadd
    temp_141 = temp_82 + temp_135;
    // 0x0002D0: 0x59A00E0001670302 Ffma
    temp_142 = fma(temp_50, temp_130, temp_136);
    // 0x0002D8: 0x5C6810000137131A Fmul
    temp_143 = temp_131 * temp_131;
    // 0x0002E8: 0x59A0100001670B20 Ffma
    temp_144 = fma(temp_29, temp_130, temp_132);
    // 0x0002F0: 0x59A0000000670F00 Ffma
    temp_145 = fma(temp_134, temp_88, temp_107);
    // 0x0002F8: 0x59A0008000770A01 Ffma
    temp_146 = fma(temp_139, temp_92, temp_111);
    // 0x000308: 0xEFF07F800D07FF00 Ast
    out_attr5.x = temp_145;
    // 0x000310: 0x59A0118001970419 Ffma
    temp_147 = fma(temp_78, temp_5, temp_122);
    // 0x000318: 0xEFF07F800D47FF01 Ast
    out_attr5.y = temp_146;
    // 0x000328: 0x4C5830180B070003 Fadd
    temp_148 = 0.0 - vp_c6.data[44].x;
    temp_149 = temp_145 + temp_148;
    // 0x000330: 0x59A00C0001B70518 Ffma
    temp_150 = fma(temp_141, temp_120, temp_127);
    // 0x000338: 0x59A0060001670D16 Ffma
    temp_151 = fma(temp_39, temp_130, temp_137);
    // 0x000348: 0xEFF07F800D87FF18 Ast
    out_attr5.z = temp_150;
    // 0x000350: 0x59A0010001570402 Ffma
    temp_152 = fma(temp_78, temp_138, temp_142);
    // 0x000358: 0x4C5830180B170104 Fadd
    temp_153 = 0.0 - vp_c6.data[44].y;
    temp_154 = temp_146 + temp_153;
    // 0x000368: 0x4C68101803870303 Fmul
    temp_155 = temp_149 * vp_c6.data[14].x;
    // 0x000370: 0x59A00D000147141A Ffma
    temp_156 = fma(temp_140, temp_140, temp_143);
    // 0x000378: 0x4C5810180BA71805 Fadd
    temp_157 = temp_150 + vp_c6.data[46].z;
    // 0x000388: 0x59A00B0001570808 Ffma
    temp_158 = fma(temp_67, temp_138, temp_151);
    // 0x000390: 0x4C68100C00470006 Fmul
    temp_159 = temp_145 * vp_c3.data[1].x;
    // 0x000398: 0x59A0100001570E0E Ffma
    temp_160 = fma(temp_56, temp_138, temp_144);
    // 0x0003A8: 0x49A0019803970416 Ffma
    temp_161 = fma(temp_154, vp_c6.data[14].y, temp_155);
    // 0x0003B0: 0x4C68100C00070003 Fmul
    temp_162 = temp_145 * vp_c3.data[0].x;
    // 0x0003B8: 0x59A00D000197191A Ffma
    temp_163 = fma(temp_147, temp_147, temp_156);
    // 0x0003C8: 0x4C6810180C270507 Fmul
    temp_164 = temp_157 * vp_c6.data[48].z;
    // 0x0003D0: 0x5080000000571A1A Mufu
    temp_165 = inversesqrt(temp_163);
    // 0x0003D8: 0x4C6810180C670509 Fmul
    temp_166 = temp_157 * vp_c6.data[49].z;
    // 0x0003E8: 0x4C5810180B970104 Fadd
    temp_167 = temp_146 + vp_c6.data[46].y;
    // 0x0003F0: 0x4C6810180CA70505 Fmul
    temp_168 = temp_157 * vp_c6.data[50].z;
    // 0x0003F8: 0x49A0018C0017010A Ffma
    temp_169 = fma(temp_146, vp_c3.data[0].y, temp_162);
    // 0x000408: 0x4C5830180B27180B Fadd
    temp_170 = 0.0 - vp_c6.data[44].z;
    temp_171 = temp_150 + temp_170;
    // 0x000410: 0x49A0030C00570106 Ffma
    temp_172 = fma(temp_146, vp_c3.data[1].y, temp_159);
    // 0x000418: 0x4C58300C03771811 Fadd
    temp_173 = 0.0 - vp_c3.data[13].w;
    temp_174 = temp_150 + temp_173;
    // 0x000428: 0x49A003980C17040C Ffma
    temp_175 = fma(temp_167, vp_c6.data[48].y, temp_164);
    // 0x000430: 0xEFF07F800B87FF11 Ast
    out_attr3.z = temp_174;
    // 0x000438: 0x49A004980C57040D Ffma
    temp_176 = fma(temp_167, vp_c6.data[49].y, temp_166);
    // 0x000448: 0x49A002980C970415 Ffma
    temp_177 = fma(temp_167, vp_c6.data[50].y, temp_168);
    // 0x000450: 0x4C68100C00870004 Fmul
    temp_178 = temp_145 * vp_c3.data[2].x;
    // 0x000458: 0x49A0050C00271809 Ffma
    temp_179 = fma(temp_150, vp_c3.data[0].z, temp_169);
    // 0x000468: 0x4C58101002071805 Fadd
    temp_180 = temp_150 + vp_c4.data[8].x;
    // 0x000470: 0x5C68100001A71313 Fmul
    temp_181 = temp_131 * temp_165;
    // 0x000478: 0x49A00B1803A70B03 Ffma
    temp_182 = fma(temp_171, vp_c6.data[14].z, temp_161);
    // 0x000488: 0xEFF07F800907FF13 Ast
    out_attr1.x = temp_181;
    // 0x000490: 0x49A0020C00970107 Ffma
    temp_183 = fma(temp_146, vp_c3.data[2].y, temp_178);
    // 0x000498: 0x49A0030C00671804 Ffma
    temp_184 = fma(temp_150, vp_c3.data[1].z, temp_172);
    // 0x0004A8: 0x4C58100C00370909 Fadd
    temp_185 = temp_179 + vp_c3.data[0].w;
    // 0x0004B0: 0x4C5810180B87000B Fadd
    temp_186 = temp_145 + vp_c6.data[46].x;
    // 0x0004B8: 0x49A0050C0027050A Ffma
    temp_187 = fma(temp_180, vp_c3.data[0].z, temp_169);
    // 0x0004C8: 0x5C68100001A71919 Fmul
    temp_188 = temp_147 * temp_165;
    // 0x0004D0: 0x5C68100001A71414 Fmul
    temp_189 = temp_140 * temp_165;
    // 0x0004D8: 0xEFF07F800987FF19 Ast
    out_attr1.z = temp_188;
    // 0x0004E8: 0x4C58300C02F70016 Fadd
    temp_190 = 0.0 - vp_c3.data[11].w;
    temp_191 = temp_145 + temp_190;
    // 0x0004F0: 0xEFF07F800947FF14 Ast
    out_attr1.y = temp_189;
    // 0x0004F8: 0x49A0030C00670506 Ffma
    temp_192 = fma(temp_180, vp_c3.data[1].z, temp_172);
    // 0x000508: 0xEFF07F800B07FF16 Ast
    out_attr3.x = temp_191;
    // 0x000510: 0x49A0038C00A70505 Ffma
    temp_193 = fma(temp_180, vp_c3.data[2].z, temp_183);
    // 0x000518: 0x4C58100C00770412 Fadd
    temp_194 = temp_184 + vp_c3.data[1].w;
    // 0x000528: 0x4C68101802C70917 Fmul
    temp_195 = temp_185 * vp_c6.data[11].x;
    // 0x000530: 0x49A0038C00A7180F Ffma
    temp_196 = fma(temp_150, vp_c3.data[2].z, temp_183);
    // 0x000538: 0x5C68100000271300 Fmul
    temp_197 = temp_181 * temp_152;
    // 0x000548: 0x49A006180C070B09 Ffma
    temp_198 = fma(temp_186, vp_c6.data[48].x, temp_175);
    // 0x000550: 0x49A006980C470B07 Ffma
    temp_199 = fma(temp_186, vp_c6.data[49].x, temp_176);
    // 0x000558: 0x49A00A980C870B04 Ffma
    temp_200 = fma(temp_186, vp_c6.data[50].x, temp_177);
    // 0x000568: 0x4C58100C00370A0A Fadd
    temp_201 = temp_187 + vp_c3.data[0].w;
    // 0x000570: 0x5C6810000087190B Fmul
    temp_202 = temp_188 * temp_158;
    // 0x000578: 0x5C68100000E7140D Fmul
    temp_203 = temp_189 * temp_160;
    // 0x000588: 0x59A2000000E7190E Ffma
    temp_204 = 0.0 - temp_197;
    temp_205 = fma(temp_188, temp_160, temp_204);
    // 0x000590: 0x4C98079803C70016 Mov
    // 0x000598: 0x4C58100C00770606 Fadd
    temp_206 = temp_192 + vp_c3.data[1].w;
    // 0x0005A8: 0x4C68100C02470A00 Fmul
    temp_207 = temp_201 * vp_c3.data[9].x;
    // 0x0005B0: 0x59A205800027140B Ffma
    temp_208 = 0.0 - temp_202;
    temp_209 = fma(temp_189, temp_152, temp_208);
    // 0x0005B8: 0x4C58300C0337010C Fadd
    temp_210 = 0.0 - vp_c3.data[12].w;
    temp_211 = temp_146 + temp_210;
    // 0x0005C8: 0x4C68100C01C70A01 Fmul
    temp_212 = temp_201 * vp_c3.data[7].x;
    // 0x0005D0: 0xEFF07F800B47FF0C Ast
    out_attr3.y = temp_211;
    // 0x0005D8: 0x51A00B1803B70302 Ffma
    temp_213 = fma(temp_182, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x0005E8: 0x4C58100C00B70505 Fadd
    temp_214 = temp_193 + vp_c3.data[2].w;
    // 0x0005F0: 0xEFF07F801047FF02 Ast
    out_attr8.y = temp_213;
    // 0x0005F8: 0x49A0000C02570600 Ffma
    temp_215 = fma(temp_206, vp_c3.data[9].y, temp_207);
    // 0x000608: 0x5C68100001070B0B Fmul
    temp_216 = temp_209 * temp_93;
    // 0x000610: 0x59A206800087130D Ffma
    temp_217 = 0.0 - temp_203;
    temp_218 = fma(temp_181, temp_158, temp_217);
    // 0x000618: 0x5C68100001070E0E Fmul
    temp_219 = temp_205 * temp_93;
    // 0x000628: 0x4C68100C02870A03 Fmul
    temp_220 = temp_201 * vp_c3.data[10].x;
    // 0x000630: 0x4C6810180BB70708 Fmul
    temp_221 = temp_199 * vp_c6.data[46].w;
    // 0x000638: 0x4C68100C02070A07 Fmul
    temp_222 = temp_201 * vp_c3.data[8].x;
    // 0x000648: 0xEFF07F801147FF08 Ast
    out_attr9.y = temp_221;
    // 0x000650: 0x49A0008C01D70602 Ffma
    temp_223 = fma(temp_206, vp_c3.data[7].y, temp_212);
    // 0x000658: 0x49A0000C02670501 Ffma
    temp_224 = fma(temp_214, vp_c3.data[9].z, temp_215);
    // 0x000668: 0x5C68100000B70B00 Fmul
    temp_225 = temp_216 * temp_216;
    // 0x000670: 0x5C68100001070D0D Fmul
    temp_226 = temp_218 * temp_93;
    // 0x000678: 0x49A0018C02970603 Ffma
    temp_227 = fma(temp_206, vp_c3.data[10].y, temp_220);
    // 0x000688: 0x4C6810180BB70404 Fmul
    temp_228 = temp_200 * vp_c6.data[46].w;
    // 0x000690: 0x49A00B9802D71212 Ffma
    temp_229 = fma(temp_194, vp_c6.data[11].y, temp_195);
    // 0x000698: 0xEFF07F801187FF04 Ast
    out_attr9.z = temp_228;
    // 0x0006A8: 0x59A0000000E70E00 Ffma
    temp_230 = fma(temp_219, temp_219, temp_225);
    // 0x0006B0: 0x49A0018C02A70503 Ffma
    temp_231 = fma(temp_214, vp_c3.data[10].z, temp_227);
    // 0x0006B8: 0x4C58100C02770101 Fadd
    temp_232 = temp_224 + vp_c3.data[9].w;
    // 0x0006C8: 0x4C58100C00B70F0F Fadd
    temp_233 = temp_196 + vp_c3.data[2].w;
    // 0x0006D0: 0xEFF07F800787FF01 Ast
    gl_Position.z = temp_232;
    // 0x0006D8: 0x59A0000000D70D00 Ffma
    temp_234 = fma(temp_226, temp_226, temp_230);
    // 0x0006E8: 0xEFF07F800C87FF0F Ast
    out_attr4.z = temp_233;
    // 0x0006F0: 0x4C58100C02B70304 Fadd
    temp_235 = temp_231 + vp_c3.data[10].w;
    // 0x0006F8: 0x5080000000570000 Mufu
    temp_236 = inversesqrt(temp_234);
    // 0x000708: 0x49A0038C02170607 Ffma
    temp_237 = fma(temp_206, vp_c3.data[8].y, temp_222);
    // 0x000710: 0xEFF07F8007C7FF04 Ast
    gl_Position.w = temp_235;
    // 0x000718: 0x4C98079803070015 Mov
    // 0x000728: 0x49A0091802E70F12 Ffma
    temp_238 = fma(temp_233, vp_c6.data[11].z, temp_229);
    // 0x000730: 0x49A0010C01E70502 Ffma
    temp_239 = fma(temp_214, vp_c3.data[7].z, temp_223);
    // 0x000738: 0x4C6810180BB70909 Fmul
    temp_240 = temp_198 * vp_c6.data[46].w;
    // 0x000748: 0x49A0038C02270507 Ffma
    temp_241 = fma(temp_214, vp_c3.data[8].z, temp_237);
    // 0x000750: 0xEFF07F801107FF09 Ast
    out_attr9.x = temp_240;
    // 0x000758: 0x5C68100000070D0D Fmul
    temp_242 = temp_226 * temp_236;
    // 0x000768: 0x5C68100000070B0B Fmul
    temp_243 = temp_216 * temp_236;
    // 0x000770: 0xEFF07F800887FF0D Ast
    out_attr0.z = temp_242;
    // 0x000778: 0x5C68100000070E0E Fmul
    temp_244 = temp_219 * temp_236;
    // 0x000788: 0xEFF07F800807FF0B Ast
    out_attr0.x = temp_243;
    // 0x000790: 0x5C68100000D71403 Fmul
    temp_245 = temp_189 * temp_242;
    // 0x000798: 0xEFF07F800847FF0E Ast
    out_attr0.y = temp_244;
    // 0x0007A8: 0x5C68100000B71900 Fmul
    temp_246 = temp_188 * temp_243;
    // 0x0007B0: 0x5C68100000E71301 Fmul
    temp_247 = temp_181 * temp_244;
    // 0x0007B8: 0x51A00A9802F71212 Ffma
    temp_248 = fma(temp_238, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x0007C8: 0x4C58100C01F70202 Fadd
    temp_249 = temp_239 + vp_c3.data[7].w;
    // 0x0007D0: 0xEFF07F801007FF12 Ast
    out_attr8.x = temp_248;
    // 0x0007D8: 0x59A2018000E71903 Ffma
    temp_250 = 0.0 - temp_245;
    temp_251 = fma(temp_188, temp_244, temp_250);
    // 0x0007E8: 0xEFF07F800707FF02 Ast
    gl_Position.x = temp_249;
    // 0x0007F0: 0x59A2000000D71313 Ffma
    temp_252 = 0.0 - temp_246;
    temp_253 = fma(temp_181, temp_242, temp_252);
    // 0x0007F8: 0x59A2008000B71401 Ffma
    temp_254 = 0.0 - temp_247;
    temp_255 = fma(temp_189, temp_243, temp_254);
    // 0x000808: 0x4C58100C02370707 Fadd
    temp_256 = temp_241 + vp_c3.data[8].w;
    // 0x000810: 0x5C68100001070303 Fmul
    temp_257 = temp_251 * temp_93;
    // 0x000818: 0xEFF07F800747FF07 Ast
    gl_Position.y = temp_256;
    // 0x000828: 0x5C68100001071313 Fmul
    temp_258 = temp_253 * temp_93;
    // 0x000830: 0xEFF07F800A07FF03 Ast
    out_attr2.x = temp_257;
    // 0x000838: 0x5C68100001070101 Fmul
    temp_259 = temp_255 * temp_93;
    // 0x000848: 0xEFF07F800A47FF13 Ast
    out_attr2.y = temp_258;
    // 0x000850: 0xEFF07F800A87FF01 Ast
    out_attr2.z = temp_259;
    // 0x000858: 0xE30000000007000F Exit
    return;
}
