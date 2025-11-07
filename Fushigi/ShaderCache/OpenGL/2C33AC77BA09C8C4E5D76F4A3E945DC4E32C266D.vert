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

layout (binding = 2, std140) uniform _vp_c1
{
    precise vec4 data[4096];
} vp_c1;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 8) in vec4 in_attr8;
layout (location = 12) in vec4 in_attr12;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 7) out vec4 out_attr7;
layout (location = 8) out vec4 out_attr8;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
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
    precise float temp_20;
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
    int temp_121;
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
    int temp_144;
    precise float temp_145;
    int temp_146;
    uint temp_147;
    uint temp_148;
    int temp_149;
    precise float temp_150;
    precise float temp_151;
    int temp_152;
    uint temp_153;
    uint temp_154;
    int temp_155;
    precise float temp_156;
    precise float temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    int temp_164;
    uint temp_165;
    uint temp_166;
    int temp_167;
    precise float temp_168;
    int temp_169;
    uint temp_170;
    int temp_171;
    precise float temp_172;
    precise float temp_173;
    int temp_174;
    uint temp_175;
    uint temp_176;
    int temp_177;
    precise float temp_178;
    int temp_179;
    uint temp_180;
    int temp_181;
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
    precise float temp_260;
    precise float temp_261;
    precise float temp_262;
    precise float temp_263;
    precise float temp_264;
    precise float temp_265;
    precise float temp_266;
    precise float temp_267;
    precise float temp_268;
    precise float temp_269;
    precise float temp_270;
    precise float temp_271;
    precise float temp_272;
    precise float temp_273;
    precise float temp_274;
    precise float temp_275;
    precise float temp_276;
    precise float temp_277;
    precise float temp_278;
    precise float temp_279;
    precise float temp_280;
    precise float temp_281;
    precise float temp_282;
    precise float temp_283;
    precise float temp_284;
    precise float temp_285;
    precise float temp_286;
    precise float temp_287;
    precise float temp_288;
    precise float temp_289;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C9807980CC70000 Mov
    // 0x000010: 0xEFD87F800807FF0C Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4C9807980CD70001 Mov
    // 0x000028: 0xEFD87F800847FF08 Ald
    temp_1 = in_attr0.y;
    // 0x000030: 0x4C9807980CE70012 Mov
    // 0x000038: 0xEFD87F800887FF0E Ald
    temp_2 = in_attr0.z;
    // 0x000048: 0x4C6810180CC70000 Fmul
    temp_3 = vp_c6.data[51].x * vp_c6.data[51].x;
    // 0x000050: 0xEFD87F801407FF0D Ald
    temp_4 = in_attr12.x;
    // 0x000058: 0x4C98079C2307000B Mov
    // 0x000068: 0xEFD87F801447FF0F Ald
    temp_5 = in_attr12.y;
    // 0x000070: 0x4C9807940037001E Mov
    // 0x000078: 0xEFD87F801487FF05 Ald
    temp_6 = in_attr12.z;
    // 0x000088: 0x49A000180CD70100 Ffma
    temp_7 = fma(vp_c6.data[51].y, vp_c6.data[51].y, temp_3);
    // 0x000090: 0x4C68101000470C01 Fmul
    temp_8 = temp_0 * vp_c4.data[1].x;
    // 0x000098: 0x4C68101000070C02 Fmul
    temp_9 = temp_0 * vp_c4.data[0].x;
    // 0x0000A8: 0x49A000180CE71212 Ffma
    temp_10 = fma(vp_c6.data[51].z, vp_c6.data[51].z, temp_7);
    // 0x0000B0: 0x5080000000571212 Mufu
    temp_11 = inversesqrt(temp_10);
    // 0x0000B8: 0x49A0009000570801 Ffma
    temp_12 = fma(temp_1, vp_c4.data[1].y, temp_8);
    // 0x0000C8: 0x49A0011000170800 Ffma
    temp_13 = fma(temp_1, vp_c4.data[0].y, temp_9);
    // 0x0000D0: 0x4C68101000870C02 Fmul
    temp_14 = temp_0 * vp_c4.data[2].x;
    // 0x0000D8: 0x49A0009000670E01 Ffma
    temp_15 = fma(temp_2, vp_c4.data[1].z, temp_12);
    // 0x0000E8: 0x49A0001000270E0A Ffma
    temp_16 = fma(temp_2, vp_c4.data[0].z, temp_13);
    // 0x0000F0: 0x49A0011000970800 Ffma
    temp_17 = fma(temp_1, vp_c4.data[2].y, temp_14);
    // 0x0000F8: 0x4C68101000870D02 Fmul
    temp_18 = temp_4 * vp_c4.data[2].x;
    // 0x000108: 0x4C6810180CC71211 Fmul
    temp_19 = temp_11 * vp_c6.data[51].x;
    // 0x000110: 0x4C58101000770106 Fadd
    temp_20 = temp_15 + vp_c4.data[1].w;
    // 0x000118: 0x4C6810180CE71203 Fmul
    temp_21 = temp_11 * vp_c6.data[51].z;
    // 0x000128: 0x4C58101000370A0A Fadd
    temp_22 = temp_16 + vp_c4.data[0].w;
    // 0x000130: 0x49A0001000A70E00 Ffma
    temp_23 = fma(temp_2, vp_c4.data[2].z, temp_17);
    // 0x000138: 0x4C6810180CD71212 Fmul
    temp_24 = temp_11 * vp_c6.data[51].y;
    // 0x000148: 0x49A108980CF71101 Ffma
    temp_25 = 0.0 - vp_c6.data[51].w;
    temp_26 = fma(temp_19, temp_25, temp_19);
    // 0x000150: 0x4C68101409670607 Fmul
    temp_27 = temp_20 * vp_c5.data[37].z;
    // 0x000158: 0x49A101980CF70304 Ffma
    temp_28 = 0.0 - vp_c6.data[51].w;
    temp_29 = fma(temp_21, temp_28, temp_21);
    // 0x000168: 0x4C58101000B70000 Fadd
    temp_30 = temp_23 + vp_c4.data[2].w;
    // 0x000170: 0x1E23DCCCCCD70109 Fmul32i
    temp_31 = temp_26 * 0.100000001;
    // 0x000178: 0x4C68101000470D01 Fmul
    temp_32 = temp_4 * vp_c4.data[1].x;
    // 0x000188: 0x59A1038000970A15 Ffma
    temp_33 = 0.0 - temp_31;
    temp_34 = fma(temp_22, temp_33, temp_27);
    // 0x000190: 0x1E23DCCCCCD70407 Fmul32i
    temp_35 = temp_29 * 0.100000001;
    // 0x000198: 0x49A0011000970F04 Ffma
    temp_36 = fma(temp_5, vp_c4.data[2].y, temp_18);
    // 0x0001A8: 0x49A0009000570F02 Ffma
    temp_37 = fma(temp_5, vp_c4.data[1].y, temp_32);
    // 0x0001B0: 0xEFD87F8014C7FF01 Ald
    temp_38 = in_attr12.w;
    // 0x0001B8: 0x4C68101000070D09 Fmul
    temp_39 = temp_4 * vp_c4.data[0].x;
    // 0x0001C8: 0x5C58300000D70C0D Fadd
    temp_40 = 0.0 - temp_4;
    temp_41 = temp_0 + temp_40;
    // 0x0001D0: 0x59A00A8000770015 Ffma
    temp_42 = fma(temp_30, temp_35, temp_34);
    // 0x0001D8: 0x49A0021000A70504 Ffma
    temp_43 = fma(temp_6, vp_c4.data[2].z, temp_36);
    // 0x0001E8: 0x49A0011000670502 Ffma
    temp_44 = fma(temp_6, vp_c4.data[1].z, temp_37);
    // 0x0001F0: 0x49A0049000170F07 Ffma
    temp_45 = fma(temp_5, vp_c4.data[0].y, temp_39);
    // 0x0001F8: 0xEFD87F801047FF09 Ald
    temp_46 = in_attr8.y;
    // 0x000208: 0x4C58101000B70413 Fadd
    temp_47 = temp_43 + vp_c4.data[2].w;
    // 0x000210: 0x4C58101000770210 Fadd
    temp_48 = temp_44 + vp_c4.data[1].w;
    // 0x000218: 0x49A0039000270507 Ffma
    temp_49 = fma(temp_6, vp_c4.data[0].z, temp_45);
    // 0x000228: 0x32A00ABF00070B02 Ffma
    temp_50 = fma(vp_c7.data[140].x, 0.5, temp_42);
    // 0x000230: 0x5C58300001370016 Fadd
    temp_51 = 0.0 - temp_47;
    temp_52 = temp_30 + temp_51;
    // 0x000238: 0x5C58300001070604 Fadd
    temp_53 = 0.0 - temp_48;
    temp_54 = temp_20 + temp_53;
    // 0x000248: 0x4C58101000370714 Fadd
    temp_55 = temp_49 + vp_c4.data[0].w;
    // 0x000250: 0x5C90000000270015 Rro
    // 0x000258: 0x386810404007020B Fmul
    temp_56 = temp_50 * 3.0;
    // 0x000268: 0x5080000000071515 Mufu
    temp_57 = cos(temp_50);
    // 0x000270: 0x38681040A007021A Fmul
    temp_58 = temp_50 * 5.0;
    // 0x000278: 0x4C6810140977021B Fmul
    temp_59 = temp_50 * vp_c5.data[37].w;
    // 0x000288: 0x5C58300001470A07 Fadd
    temp_60 = 0.0 - temp_55;
    temp_61 = temp_22 + temp_60;
    // 0x000290: 0x59A202000167FF18 Ffma
    temp_62 = 0.0 - temp_54;
    temp_63 = fma(0.0, temp_52, temp_62);
    // 0x000298: 0x4C68101409570101 Fmul
    temp_64 = temp_38 * vp_c5.data[37].y;
    // 0x0002A8: 0x5C90000000B7001C Rro
    // 0x0002B0: 0xEFD87F800A07FF0B Ald
    temp_65 = in_attr2.x;
    // 0x0002B8: 0x5C59100001371313 Fadd
    temp_66 = 0.0 - temp_47;
    temp_67 = temp_66 + temp_47;
    // 0x0002C8: 0x5080000000071C02 Mufu
    temp_68 = cos(temp_56);
    // 0x0002D0: 0x59A103800167FF17 Ffma
    temp_69 = 0.0 - temp_52;
    temp_70 = fma(0.0, temp_69, temp_61);
    // 0x0002D8: 0x5C90000001A70016 Rro
    // 0x0002E8: 0x5C6910000077FF19 Fmul
    temp_71 = 0.0 - temp_61;
    temp_72 = 0.0 * temp_71;
    // 0x0002F0: 0xEFD87F800907FF07 Ald
    temp_73 = in_attr1.x;
    // 0x0002F8: 0x5C90000001B7001A Rro
    // 0x000308: 0x5080000000071616 Mufu
    temp_74 = cos(temp_58);
    // 0x000310: 0x5C6810000157151B Fmul
    temp_75 = temp_57 * temp_57;
    // 0x000318: 0x5080000000171A15 Mufu
    temp_76 = sin(temp_59);
    // 0x000328: 0x5C68100001871118 Fmul
    temp_77 = temp_19 * temp_63;
    // 0x000330: 0x4C6810180CF70101 Fmul
    temp_78 = temp_64 * vp_c6.data[51].w;
    // 0x000338: 0x59A00C800047FF19 Ffma
    temp_79 = fma(0.0, temp_54, temp_72);
    // 0x000348: 0xEFD87F800A47FF04 Ald
    temp_80 = in_attr2.y;
    // 0x000350: 0x4C9807940027001C Mov
    // 0x000358: 0x5C68100000271B1B Fmul
    temp_81 = temp_75 * temp_68;
    // 0x000368: 0xEFD87F800947FF02 Ald
    temp_82 = in_attr1.y;
    // 0x000370: 0x59A00C0001771218 Ffma
    temp_83 = fma(temp_24, temp_70, temp_77);
    // 0x000378: 0x5C58300000F70817 Fadd
    temp_84 = 0.0 - temp_5;
    temp_85 = temp_1 + temp_84;
    // 0x000388: 0xEFD87F800987FF0F Ald
    temp_86 = in_attr1.z;
    // 0x000390: 0x5C68120001671B0C Fmul
    temp_87 = temp_81 * 0.5;
    temp_88 = temp_87 * temp_74;
    // 0x000398: 0xEFD87F801007FF08 Ald
    temp_89 = in_attr8.x;
    // 0x0003A8: 0x59A00C0001970319 Ffma
    temp_90 = fma(temp_21, temp_79, temp_83);
    // 0x0003B0: 0x5C68100000D70D18 Fmul
    temp_91 = temp_41 * temp_41;
    // 0x0003B8: 0x1E23DCCCCCD71516 Fmul32i
    temp_92 = temp_76 * 0.100000001;
    // 0x0003C8: 0x4C68101000070B1A Fmul
    temp_93 = temp_65 * vp_c4.data[0].x;
    // 0x0003D0: 0x5C58300000570E0D Fadd
    temp_94 = 0.0 - temp_6;
    temp_95 = temp_2 + temp_94;
    // 0x0003D8: 0xEFD87F800A87FF05 Ald
    temp_96 = in_attr2.z;
    // 0x0003E8: 0x4C68101000870715 Fmul
    temp_97 = temp_73 * vp_c4.data[2].x;
    // 0x0003F0: 0x51A00E140047090E Ffma
    temp_98 = fma(temp_46, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x0003F8: 0x59A00C0001771718 Ffma
    temp_99 = fma(temp_85, temp_85, temp_91);
    // 0x000408: 0x59A00B0000C7191B Ffma
    temp_100 = fma(temp_90, temp_88, temp_92);
    // 0x000410: 0x4C68101000870B16 Fmul
    temp_101 = temp_65 * vp_c4.data[2].x;
    // 0x000418: 0x4C68101000470B17 Fmul
    temp_102 = temp_65 * vp_c4.data[1].x;
    // 0x000428: 0x4C6810100007070B Fmul
    temp_103 = temp_73 * vp_c4.data[0].x;
    // 0x000430: 0x4C68101000470707 Fmul
    temp_104 = temp_73 * vp_c4.data[1].x;
    // 0x000438: 0x49A00D100017041A Ffma
    temp_105 = fma(temp_80, vp_c4.data[0].y, temp_93);
    // 0x000448: 0x5C68100001B7011B Fmul
    temp_106 = temp_78 * temp_100;
    // 0x000450: 0x49A00B1000970416 Ffma
    temp_107 = fma(temp_80, vp_c4.data[2].y, temp_101);
    // 0x000458: 0x49A00B9000570417 Ffma
    temp_108 = fma(temp_80, vp_c4.data[1].y, temp_102);
    // 0x000468: 0x49A0059000170219 Ffma
    temp_109 = fma(temp_82, vp_c4.data[0].y, temp_103);
    // 0x000470: 0x49A00A9000970215 Ffma
    temp_110 = fma(temp_82, vp_c4.data[2].y, temp_97);
    // 0x000478: 0x49A0039000570204 Ffma
    temp_111 = fma(temp_82, vp_c4.data[1].y, temp_104);
    // 0x000488: 0x59A00C0000D70D18 Ffma
    temp_112 = fma(temp_95, temp_95, temp_99);
    // 0x000490: 0x5C90000001B7001B Rro
    // 0x000498: 0x5080000000871818 Mufu
    temp_113 = sqrt(temp_112);
    // 0x0004A8: 0x49A00C9000270F02 Ffma
    temp_114 = fma(temp_86, vp_c4.data[0].z, temp_109);
    // 0x0004B0: 0x5080000000071B0D Mufu
    temp_115 = cos(temp_106);
    // 0x0004B8: 0x49A0021000670F04 Ffma
    temp_116 = fma(temp_86, vp_c4.data[1].z, temp_111);
    // 0x0004C8: 0x5080000000171B0B Mufu
    temp_117 = sin(temp_106);
    // 0x0004D0: 0x51A00F1400570909 Ffma
    temp_118 = fma(temp_46, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x0004D8: 0x49A00A9000A70F0F Ffma
    temp_119 = fma(temp_86, vp_c4.data[2].z, temp_110);
    // 0x0004E8: 0x4CB0119002371A15 F2i
    temp_120 = trunc(vp_c4.data[8].w);
    temp_121 = int(temp_120);
    // 0x0004F0: 0x49A0071400070807 Ffma
    temp_122 = fma(temp_89, vp_c5.data[0].x, temp_98);
    // 0x0004F8: 0x5C68100000270219 Fmul
    temp_123 = temp_114 * temp_114;
    // 0x000508: 0x49A00D100027050E Ffma
    temp_124 = fma(temp_96, vp_c4.data[0].z, temp_105);
    // 0x000510: 0x49A0049400170808 Ffma
    temp_125 = fma(temp_89, vp_c5.data[0].y, temp_118);
    // 0x000518: 0x49A00B1000A70509 Ffma
    temp_126 = fma(temp_96, vp_c4.data[2].z, temp_107);
    // 0x000528: 0x49A00B9000670505 Ffma
    temp_127 = fma(temp_96, vp_c4.data[1].z, temp_108);
    // 0x000530: 0x5C68100001871216 Fmul
    temp_128 = temp_24 * temp_113;
    // 0x000538: 0x59A00C8000470419 Ffma
    temp_129 = fma(temp_116, temp_116, temp_123);
    // 0x000548: 0x5C68100000D7101D Fmul
    temp_130 = temp_48 * temp_115;
    // 0x000550: 0x5C69100000B7101B Fmul
    temp_131 = 0.0 - temp_117;
    temp_132 = temp_48 * temp_131;
    // 0x000558: 0x5C68100001871112 Fmul
    temp_133 = temp_19 * temp_113;
    // 0x000568: 0x5C68100001870317 Fmul
    temp_134 = temp_21 * temp_113;
    // 0x000570: 0x5C68100000E70E1A Fmul
    temp_135 = temp_124 * temp_124;
    // 0x000578: 0x59A00C8000F70F11 Ffma
    temp_136 = fma(temp_119, temp_119, temp_129);
    // 0x000588: 0x59A30E8000B7141D Ffma
    temp_137 = 0.0 - temp_117;
    temp_138 = 0.0 - temp_130;
    temp_139 = fma(temp_55, temp_137, temp_138);
    // 0x000590: 0x5080000000571111 Mufu
    temp_140 = inversesqrt(temp_136);
    // 0x000598: 0x59A30D8000D71403 Ffma
    temp_141 = 0.0 - temp_115;
    temp_142 = 0.0 - temp_132;
    temp_143 = fma(temp_55, temp_141, temp_142);
    // 0x0005A8: 0x3848000000471518 Shl
    temp_144 = temp_121 << 4;
    // 0x0005B0: 0x59A00D000057051A Ffma
    temp_145 = fma(temp_127, temp_127, temp_135);
    // 0x0005B8: 0xEF94007048871815 Ldc
    temp_146 = temp_144 + 0x488;
    temp_147 = uint(temp_146) >> 2;
    temp_148 = temp_147 >> 2;
    temp_149 = int(temp_147) & 3;
    temp_150 = vp_c7.data[int(temp_148)][temp_149];
    // 0x0005C8: 0x5C58100001D71019 Fadd
    temp_151 = temp_48 + temp_139;
    // 0x0005D0: 0xEF94007068871810 Ldc
    temp_152 = temp_144 + 0x688;
    temp_153 = uint(temp_152) >> 2;
    temp_154 = temp_153 >> 2;
    temp_155 = int(temp_153) & 3;
    temp_156 = vp_c7.data[int(temp_154)][temp_155];
    // 0x0005D8: 0x5C58100000371403 Fadd
    temp_157 = temp_55 + temp_143;
    // 0x0005E8: 0x5C5810000137001B Fadd
    temp_158 = temp_30 + temp_67;
    // 0x0005F0: 0x5C68100001270112 Fmul
    temp_159 = temp_78 * temp_133;
    // 0x0005F8: 0x5C68100001670116 Fmul
    temp_160 = temp_78 * temp_128;
    // 0x000608: 0x5C68100001770117 Fmul
    temp_161 = temp_78 * temp_134;
    // 0x000610: 0x59A00C800007FF1C Ffma
    temp_162 = fma(0.0, temp_30, temp_151);
    // 0x000618: 0x59A001800007FF14 Ffma
    temp_163 = fma(0.0, temp_30, temp_157);
    // 0x000628: 0xEF95007048071800 Ldc
    temp_164 = temp_144 + 0x480;
    temp_165 = uint(temp_164) >> 2;
    temp_166 = temp_165 >> 2;
    temp_167 = int(temp_165) & 3;
    temp_168 = vp_c7.data[int(temp_166)][temp_167];
    temp_169 = int(temp_165) + 1;
    temp_170 = uint(temp_169) >> 2;
    temp_171 = temp_169 & 3;
    temp_172 = vp_c7.data[int(temp_170)][temp_171];
    // 0x000630: 0x5C68100001170219 Fmul
    temp_173 = temp_114 * temp_140;
    // 0x000638: 0xEF95007068071802 Ldc
    temp_174 = temp_144 + 0x680;
    temp_175 = uint(temp_174) >> 2;
    temp_176 = temp_175 >> 2;
    temp_177 = int(temp_175) & 3;
    temp_178 = vp_c7.data[int(temp_176)][temp_177];
    temp_179 = int(temp_175) + 1;
    temp_180 = uint(temp_179) >> 2;
    temp_181 = temp_179 & 3;
    temp_182 = vp_c7.data[int(temp_180)][temp_181];
    // 0x000648: 0x59A00D0000970913 Ffma
    temp_183 = fma(temp_126, temp_126, temp_145);
    // 0x000650: 0x59A00D800067FF1B Ffma
    temp_184 = fma(0.0, temp_20, temp_158);
    // 0x000658: 0x5080000000571313 Mufu
    temp_185 = inversesqrt(temp_183);
    // 0x000668: 0x59A00E0000D7061C Ffma
    temp_186 = fma(temp_20, temp_115, temp_162);
    // 0x000670: 0x59A10A0000B70614 Ffma
    temp_187 = 0.0 - temp_117;
    temp_188 = fma(temp_20, temp_187, temp_163);
    // 0x000678: 0x5C68100001770C1A Fmul
    temp_189 = temp_88 * temp_161;
    // 0x000688: 0x5C68100001170404 Fmul
    temp_190 = temp_116 * temp_140;
    // 0x000690: 0x5C68100001170F0F Fmul
    temp_191 = temp_119 * temp_140;
    // 0x000698: 0xEFD87F800AC7FF11 Ald
    temp_192 = in_attr2.w;
    // 0x0006A8: 0x59A10D8000A7FF1B Ffma
    temp_193 = 0.0 - temp_22;
    temp_194 = fma(0.0, temp_193, temp_184);
    // 0x0006B0: 0xEFF07F800D07FF07 Ast
    out_attr5.x = temp_122;
    // 0x0006B8: 0x5C68100001270C12 Fmul
    temp_195 = temp_88 * temp_159;
    // 0x0006C8: 0xEFF07F800D47FF08 Ast
    out_attr5.y = temp_125;
    // 0x0006D0: 0x59A00A0000D70A14 Ffma
    temp_196 = fma(temp_22, temp_115, temp_188);
    // 0x0006D8: 0xEFF07F800847FF04 Ast
    out_attr0.y = temp_190;
    // 0x0006E8: 0x5C68100001670C16 Fmul
    temp_197 = temp_88 * temp_160;
    // 0x0006F0: 0xEFF07F800887FF0F Ast
    out_attr0.z = temp_191;
    // 0x0006F8: 0x49A00D8400071A1A Ffma
    temp_198 = fma(temp_189, vp_c1.data[0].x, temp_194);
    // 0x000708: 0xEFF07F800807FF19 Ast
    out_attr0.x = temp_173;
    // 0x000710: 0x59A00E0000B70A1C Ffma
    temp_199 = fma(temp_22, temp_117, temp_186);
    // 0x000718: 0x5C68100001370E0E Fmul
    temp_200 = temp_124 * temp_185;
    // 0x000728: 0x5C68100001370506 Fmul
    temp_201 = temp_127 * temp_185;
    // 0x000730: 0xEFF07F800907FF0E Ast
    out_attr1.x = temp_200;
    // 0x000738: 0x5C68100001370913 Fmul
    temp_202 = temp_126 * temp_185;
    // 0x000748: 0xEFF07F800947FF06 Ast
    out_attr1.y = temp_201;
    // 0x000750: 0x49A00A0400071205 Ffma
    temp_203 = fma(temp_195, vp_c1.data[0].x, temp_196);
    // 0x000758: 0xEFF07F800987FF13 Ast
    out_attr1.z = temp_202;
    // 0x000768: 0x59A0080001571A10 Ffma
    temp_204 = fma(temp_198, temp_150, temp_156);
    // 0x000770: 0x49A00E0400071616 Ffma
    temp_205 = fma(temp_197, vp_c1.data[0].x, temp_199);
    // 0x000778: 0x5C68100000F70609 Fmul
    temp_206 = temp_201 * temp_191;
    // 0x000788: 0x5C6810000197130C Fmul
    temp_207 = temp_202 * temp_173;
    // 0x000790: 0x5C68100000470E0B Fmul
    temp_208 = temp_200 * temp_190;
    // 0x000798: 0x59A0010000070500 Ffma
    temp_209 = fma(temp_203, temp_168, temp_178);
    // 0x0007A8: 0x4C5810180BA7100A Fadd
    temp_210 = temp_204 + vp_c6.data[46].z;
    // 0x0007B0: 0x59A0018000171601 Ffma
    temp_211 = fma(temp_205, temp_172, temp_182);
    // 0x0007B8: 0x59A2048000471312 Ffma
    temp_212 = 0.0 - temp_206;
    temp_213 = fma(temp_202, temp_190, temp_212);
    // 0x0007C8: 0x59A2060000F70E0C Ffma
    temp_214 = 0.0 - temp_207;
    temp_215 = fma(temp_200, temp_191, temp_214);
    // 0x0007D0: 0x59A205800197060B Ffma
    temp_216 = 0.0 - temp_208;
    temp_217 = fma(temp_201, temp_173, temp_216);
    // 0x0007D8: 0x4C5830180B070003 Fadd
    temp_218 = 0.0 - vp_c6.data[44].x;
    temp_219 = temp_209 + temp_218;
    // 0x0007E8: 0x4C6810180C670A08 Fmul
    temp_220 = temp_210 * vp_c6.data[49].z;
    // 0x0007F0: 0x4C6810180C270A05 Fmul
    temp_221 = temp_210 * vp_c6.data[48].z;
    // 0x0007F8: 0x4C5810180B970107 Fadd
    temp_222 = temp_211 + vp_c6.data[46].y;
    // 0x000808: 0x4C6810180CA70A0A Fmul
    temp_223 = temp_210 * vp_c6.data[50].z;
    // 0x000810: 0x5C68100001171212 Fmul
    temp_224 = temp_213 * temp_192;
    // 0x000818: 0x5C68100001170C09 Fmul
    temp_225 = temp_215 * temp_192;
    // 0x000828: 0xEFF07F800A07FF12 Ast
    out_attr2.x = temp_224;
    // 0x000830: 0x5C68100001170B11 Fmul
    temp_226 = temp_217 * temp_192;
    // 0x000838: 0xEFF07F800A47FF09 Ast
    out_attr2.y = temp_225;
    // 0x000848: 0x4C6810180387030C Fmul
    temp_227 = temp_219 * vp_c6.data[14].x;
    // 0x000850: 0xEFF07F800A87FF11 Ast
    out_attr2.z = temp_226;
    // 0x000858: 0x4C68100C00070004 Fmul
    temp_228 = temp_209 * vp_c3.data[0].x;
    // 0x000868: 0x4C5830180B17010B Fadd
    temp_229 = 0.0 - vp_c6.data[44].y;
    temp_230 = temp_211 + temp_229;
    // 0x000870: 0x49A004180C570708 Ffma
    temp_231 = fma(temp_222, vp_c6.data[49].y, temp_220);
    // 0x000878: 0x49A002980C170703 Ffma
    temp_232 = fma(temp_222, vp_c6.data[48].y, temp_221);
    // 0x000888: 0x4C68100C00870002 Fmul
    temp_233 = temp_209 * vp_c3.data[2].x;
    // 0x000890: 0x49A005180C970707 Ffma
    temp_234 = fma(temp_222, vp_c6.data[50].y, temp_223);
    // 0x000898: 0x4C68100C0047000A Fmul
    temp_235 = temp_209 * vp_c3.data[1].x;
    // 0x0008A8: 0x49A0020C0017010D Ffma
    temp_236 = fma(temp_211, vp_c3.data[0].y, temp_228);
    // 0x0008B0: 0x49A0061803970B05 Ffma
    temp_237 = fma(temp_230, vp_c6.data[14].y, temp_227);
    // 0x0008B8: 0x4C58101002071006 Fadd
    temp_238 = temp_204 + vp_c4.data[8].x;
    // 0x0008C8: 0x49A0010C0097010B Ffma
    temp_239 = fma(temp_211, vp_c3.data[2].y, temp_233);
    // 0x0008D0: 0x4C5810180B87000E Fadd
    temp_240 = temp_209 + vp_c6.data[46].x;
    // 0x0008D8: 0x49A0050C0057010F Ffma
    temp_241 = fma(temp_211, vp_c3.data[1].y, temp_235);
    // 0x0008E8: 0x49A0068C0027100A Ffma
    temp_242 = fma(temp_204, vp_c3.data[0].z, temp_236);
    // 0x0008F0: 0x4C58300C0377100C Fadd
    temp_243 = 0.0 - vp_c3.data[13].w;
    temp_244 = temp_204 + temp_243;
    // 0x0008F8: 0x49A0068C0027060D Ffma
    temp_245 = fma(temp_238, vp_c3.data[0].z, temp_236);
    // 0x000908: 0xEFF07F800B87FF0C Ast
    out_attr3.z = temp_244;
    // 0x000910: 0x49A0058C00A70602 Ffma
    temp_246 = fma(temp_238, vp_c3.data[2].z, temp_239);
    // 0x000918: 0x49A0078C00670606 Ffma
    temp_247 = fma(temp_238, vp_c3.data[1].z, temp_241);
    // 0x000928: 0x49A0058C00A71004 Ffma
    temp_248 = fma(temp_204, vp_c3.data[2].z, temp_239);
    // 0x000930: 0x49A0078C0067100F Ffma
    temp_249 = fma(temp_204, vp_c3.data[1].z, temp_241);
    // 0x000938: 0x4C5830180B271010 Fadd
    temp_250 = 0.0 - vp_c6.data[44].z;
    temp_251 = temp_204 + temp_250;
    // 0x000948: 0x49A001980C070E03 Ffma
    temp_252 = fma(temp_240, vp_c6.data[48].x, temp_232);
    // 0x000950: 0x4C58100C00370D0D Fadd
    temp_253 = temp_245 + vp_c3.data[0].w;
    // 0x000958: 0x4C58100C00370A0A Fadd
    temp_254 = temp_242 + vp_c3.data[0].w;
    // 0x000968: 0x4C58300C02F70000 Fadd
    temp_255 = 0.0 - vp_c3.data[11].w;
    temp_256 = temp_209 + temp_255;
    // 0x000970: 0x4C58300C03370101 Fadd
    temp_257 = 0.0 - vp_c3.data[12].w;
    temp_258 = temp_211 + temp_257;
    // 0x000978: 0xEFF07F800B07FF00 Ast
    out_attr3.x = temp_256;
    // 0x000988: 0x49A0029803A71010 Ffma
    temp_259 = fma(temp_251, vp_c6.data[14].z, temp_237);
    // 0x000990: 0xEFF07F800B47FF01 Ast
    out_attr3.y = temp_258;
    // 0x000998: 0x4C6810180BB70305 Fmul
    temp_260 = temp_252 * vp_c6.data[46].w;
    // 0x0009A8: 0x4C68100C02870D03 Fmul
    temp_261 = temp_253 * vp_c3.data[10].x;
    // 0x0009B0: 0xEFF07F801007FF05 Ast
    out_attr8.x = temp_260;
    // 0x0009B8: 0x4C68100C02470D00 Fmul
    temp_262 = temp_253 * vp_c3.data[9].x;
    // 0x0009C8: 0x4C58100C00770F0F Fadd
    temp_263 = temp_249 + vp_c3.data[1].w;
    // 0x0009D0: 0x4C68100C01C70D01 Fmul
    temp_264 = temp_253 * vp_c3.data[7].x;
    // 0x0009D8: 0x4C68101802C70A0A Fmul
    temp_265 = temp_254 * vp_c6.data[11].x;
    // 0x0009E8: 0x4C58100C00770606 Fadd
    temp_266 = temp_247 + vp_c3.data[1].w;
    // 0x0009F0: 0x4C68100C02070D0D Fmul
    temp_267 = temp_253 * vp_c3.data[8].x;
    // 0x0009F8: 0x4C58100C00B70404 Fadd
    temp_268 = temp_248 + vp_c3.data[2].w;
    // 0x000A08: 0x4C58100C00B70202 Fadd
    temp_269 = temp_246 + vp_c3.data[2].w;
    // 0x000A10: 0xEFF07F800C87FF04 Ast
    out_attr4.z = temp_268;
    // 0x000A18: 0x49A0051802D70F0A Ffma
    temp_270 = fma(temp_263, vp_c6.data[11].y, temp_265);
    // 0x000A28: 0x49A0000C02570600 Ffma
    temp_271 = fma(temp_266, vp_c3.data[9].y, temp_262);
    // 0x000A30: 0x49A0008C01D70601 Ffma
    temp_272 = fma(temp_266, vp_c3.data[7].y, temp_264);
    // 0x000A38: 0x49A0018C02970603 Ffma
    temp_273 = fma(temp_266, vp_c3.data[10].y, temp_261);
    // 0x000A48: 0x49A0068C0217060D Ffma
    temp_274 = fma(temp_266, vp_c3.data[8].y, temp_267);
    // 0x000A50: 0x49A004180C470E08 Ffma
    temp_275 = fma(temp_240, vp_c6.data[49].x, temp_231);
    // 0x000A58: 0x49A003980C870E07 Ffma
    temp_276 = fma(temp_240, vp_c6.data[50].x, temp_234);
    // 0x000A68: 0x4C98079803070009 Mov
    // 0x000A70: 0x4C98079803C7000B Mov
    // 0x000A78: 0x49A0051802E7040A Ffma
    temp_277 = fma(temp_268, vp_c6.data[11].z, temp_270);
    // 0x000A88: 0x49A0000C02670200 Ffma
    temp_278 = fma(temp_269, vp_c3.data[9].z, temp_271);
    // 0x000A90: 0x49A0008C01E70201 Ffma
    temp_279 = fma(temp_269, vp_c3.data[7].z, temp_272);
    // 0x000A98: 0x49A0018C02A70203 Ffma
    temp_280 = fma(temp_269, vp_c3.data[10].z, temp_273);
    // 0x000AA8: 0x49A0068C0227020D Ffma
    temp_281 = fma(temp_269, vp_c3.data[8].z, temp_274);
    // 0x000AB0: 0x4C6810180BB70808 Fmul
    temp_282 = temp_275 * vp_c6.data[46].w;
    // 0x000AB8: 0x4C6810180BB70707 Fmul
    temp_283 = temp_276 * vp_c6.data[46].w;
    // 0x000AC8: 0xEFF07F801047FF08 Ast
    out_attr8.y = temp_282;
    // 0x000AD0: 0x51A0059803B71010 Ffma
    temp_284 = fma(temp_259, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000AD8: 0xEFF07F801087FF07 Ast
    out_attr8.z = temp_283;
    // 0x000AE8: 0x51A0049802F70A0A Ffma
    temp_285 = fma(temp_277, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000AF0: 0xEFF07F800F47FF10 Ast
    out_attr7.y = temp_284;
    // 0x000AF8: 0x4C58100C02770000 Fadd
    temp_286 = temp_278 + vp_c3.data[9].w;
    // 0x000B08: 0xEFF07F800F07FF0A Ast
    out_attr7.x = temp_285;
    // 0x000B10: 0x4C58100C01F70101 Fadd
    temp_287 = temp_279 + vp_c3.data[7].w;
    // 0x000B18: 0xEFF07F800787FF00 Ast
    gl_Position.z = temp_286;
    // 0x000B28: 0x4C58100C02B70303 Fadd
    temp_288 = temp_280 + vp_c3.data[10].w;
    // 0x000B30: 0xEFF07F800707FF01 Ast
    gl_Position.x = temp_287;
    // 0x000B38: 0x4C58100C02370D0D Fadd
    temp_289 = temp_281 + vp_c3.data[8].w;
    // 0x000B48: 0xEFF07F8007C7FF03 Ast
    gl_Position.w = temp_288;
    // 0x000B50: 0xEFF07F800747FF0D Ast
    gl_Position.y = temp_289;
    // 0x000B58: 0xE30000000007000F Exit
    return;
}
