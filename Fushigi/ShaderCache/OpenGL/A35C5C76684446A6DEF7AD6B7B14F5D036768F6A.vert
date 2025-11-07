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

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 2, std140) uniform _vp_c1
{
    precise vec4 data[4096];
} vp_c1;

layout (binding = 0) uniform sampler2D vp_t_cb7_2A;
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
layout (location = 6) out vec4 out_attr6;
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
    precise vec4 temp_35;
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
    int temp_177;
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
    int temp_202;
    int temp_203;
    uint temp_204;
    uint temp_205;
    int temp_206;
    precise float temp_207;
    int temp_208;
    uint temp_209;
    uint temp_210;
    int temp_211;
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
    int temp_225;
    uint temp_226;
    uint temp_227;
    int temp_228;
    precise float temp_229;
    int temp_230;
    uint temp_231;
    int temp_232;
    precise float temp_233;
    precise float temp_234;
    precise float temp_235;
    precise float temp_236;
    int temp_237;
    uint temp_238;
    uint temp_239;
    int temp_240;
    precise float temp_241;
    int temp_242;
    uint temp_243;
    int temp_244;
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
    precise float temp_290;
    precise float temp_291;
    precise float temp_292;
    precise float temp_293;
    precise float temp_294;
    precise float temp_295;
    precise float temp_296;
    precise float temp_297;
    precise float temp_298;
    precise float temp_299;
    precise float temp_300;
    precise float temp_301;
    precise float temp_302;
    precise float temp_303;
    precise float temp_304;
    precise float temp_305;
    precise float temp_306;
    precise float temp_307;
    precise float temp_308;
    precise float temp_309;
    precise float temp_310;
    precise float temp_311;
    precise float temp_312;
    precise float temp_313;
    precise float temp_314;
    precise float temp_315;
    precise float temp_316;
    precise float temp_317;
    precise float temp_318;
    precise float temp_319;
    precise float temp_320;
    precise float temp_321;
    precise float temp_322;
    precise float temp_323;
    precise float temp_324;
    precise float temp_325;
    precise float temp_326;
    precise float temp_327;
    precise float temp_328;
    precise float temp_329;
    precise float temp_330;
    precise float temp_331;
    precise float temp_332;
    precise float temp_333;
    precise float temp_334;
    precise float temp_335;
    precise float temp_336;
    precise float temp_337;
    precise float temp_338;
    precise float temp_339;
    precise float temp_340;
    precise float temp_341;
    precise float temp_342;
    precise float temp_343;
    precise float temp_344;
    precise float temp_345;
    precise float temp_346;
    precise float temp_347;
    precise float temp_348;
    precise float temp_349;
    precise float temp_350;
    precise float temp_351;
    precise float temp_352;
    precise float temp_353;
    precise float temp_354;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x0103F0000007F011 Mov32i
    // 0x000010: 0xEFD87F801407FF08 Ald
    temp_0 = in_attr12.x;
    // 0x000018: 0x4C9807980D370009 Mov
    // 0x000028: 0xEFD87F801447FF07 Ald
    temp_1 = in_attr12.y;
    // 0x000030: 0x4C9807980CC7000A Mov
    // 0x000038: 0xEFD87F801487FF0E Ald
    temp_2 = in_attr12.z;
    // 0x000048: 0x4C68101000070800 Fmul
    temp_3 = temp_0 * vp_c4.data[0].x;
    // 0x000050: 0x4C68101000470801 Fmul
    temp_4 = temp_0 * vp_c4.data[1].x;
    // 0x000058: 0x4C68101000870802 Fmul
    temp_5 = temp_0 * vp_c4.data[2].x;
    // 0x000068: 0x49A0001000170700 Ffma
    temp_6 = fma(temp_1, vp_c4.data[0].y, temp_3);
    // 0x000070: 0x49A0009000570701 Ffma
    temp_7 = fma(temp_1, vp_c4.data[1].y, temp_4);
    // 0x000078: 0x49A0011000970703 Ffma
    temp_8 = fma(temp_1, vp_c4.data[2].y, temp_5);
    // 0x000088: 0x49A0001000270E00 Ffma
    temp_9 = fma(temp_2, vp_c4.data[0].z, temp_6);
    // 0x000090: 0x49A0009000670E01 Ffma
    temp_10 = fma(temp_2, vp_c4.data[1].z, temp_7);
    // 0x000098: 0x49A0019000A70E03 Ffma
    temp_11 = fma(temp_2, vp_c4.data[2].z, temp_8);
    // 0x0000A8: 0x4C58101000370005 Fadd
    temp_12 = temp_9 + vp_c4.data[0].w;
    // 0x0000B0: 0x4C58101000770104 Fadd
    temp_13 = temp_10 + vp_c4.data[1].w;
    // 0x0000B8: 0x4C58101000B70306 Fadd
    temp_14 = temp_11 + vp_c4.data[2].w;
    // 0x0000C8: 0x4C68100C01870501 Fmul
    temp_15 = temp_12 * vp_c3.data[6].x;
    // 0x0000D0: 0x4C68100C01070502 Fmul
    temp_16 = temp_12 * vp_c3.data[4].x;
    // 0x0000D8: 0x49A0008C01970400 Ffma
    temp_17 = fma(temp_13, vp_c3.data[6].y, temp_15);
    // 0x0000E8: 0x4C68100C00C70501 Fmul
    temp_18 = temp_12 * vp_c3.data[3].x;
    // 0x0000F0: 0x49A0000C01A70603 Ffma
    temp_19 = fma(temp_14, vp_c3.data[6].z, temp_17);
    // 0x0000F8: 0x49A0008C00D70401 Ffma
    temp_20 = fma(temp_13, vp_c3.data[3].y, temp_18);
    // 0x000108: 0x49A0010C01170400 Ffma
    temp_21 = fma(temp_13, vp_c3.data[4].y, temp_16);
    // 0x000110: 0x4C58100C01B70303 Fadd
    temp_22 = temp_19 + vp_c3.data[6].w;
    // 0x000118: 0x49A0008C00E70601 Ffma
    temp_23 = fma(temp_14, vp_c3.data[3].z, temp_20);
    // 0x000128: 0x5080000000470303 Mufu
    temp_24 = 1.0 / temp_22;
    // 0x000130: 0x49A0000C01270600 Ffma
    temp_25 = fma(temp_14, vp_c3.data[4].z, temp_21);
    // 0x000138: 0x4C58100C00F70101 Fadd
    temp_26 = temp_23 + vp_c3.data[3].w;
    // 0x000148: 0x4C58100C01370000 Fadd
    temp_27 = temp_25 + vp_c3.data[4].w;
    // 0x000150: 0x5C68100000370102 Fmul
    temp_28 = temp_26 * temp_24;
    // 0x000158: 0x5C69100000370000 Fmul
    temp_29 = 0.0 - temp_24;
    temp_30 = temp_27 * temp_29;
    // 0x000168: 0x4C9807980D270001 Mov
    // 0x000170: 0x32A008BF00070202 Ffma
    temp_31 = fma(temp_28, 0.5, 0.5);
    // 0x000178: 0x32A008BF00070000 Ffma
    temp_32 = fma(temp_30, 0.5, 0.5);
    // 0x000188: 0x51A000980D070202 Ffma
    temp_33 = fma(temp_31, vp_c6.data[52].z, vp_c6.data[52].x);
    // 0x000190: 0x4C98079C02A70001 Mov
    // 0x000198: 0x51A004980D170003 Ffma
    temp_34 = fma(temp_32, vp_c6.data[52].w, vp_c6.data[52].y);
    // 0x0001A8: 0xDEB80007A0170200 TexB
    temp_35 = texture(vp_t_cb7_2A, vec2(temp_33, temp_34)).xyzw;
    temp_36 = temp_35.x;
    temp_37 = temp_35.y;
    temp_38 = temp_35.z;
    temp_39 = temp_35.w;
    // 0x0001B0: 0xEFD87F800807FF12 Ald
    temp_40 = in_attr0.x;
    // 0x0001B8: 0x4C9807980CD7000B Mov
    // 0x0001C8: 0xEFD87F800847FF16 Ald
    temp_41 = in_attr0.y;
    // 0x0001D0: 0x4C6810180CC70A0A Fmul
    temp_42 = vp_c6.data[51].x * vp_c6.data[51].x;
    // 0x0001D8: 0xEFD87F800907FF15 Ald
    temp_43 = in_attr1.x;
    // 0x0001E8: 0x4C9807980CE7000D Mov
    // 0x0001F0: 0xEFD87F800947FF18 Ald
    temp_44 = in_attr1.y;
    // 0x0001F8: 0x49A005180CD70B0B Ffma
    temp_45 = fma(vp_c6.data[51].y, vp_c6.data[51].y, temp_42);
    // 0x000208: 0xEFD87F800887FF09 Ald
    temp_46 = in_attr0.z;
    // 0x000210: 0x49A005980CE70D0D Ffma
    temp_47 = fma(vp_c6.data[51].z, vp_c6.data[51].z, temp_45);
    // 0x000218: 0xEFD87F800A07FF0A Ald
    temp_48 = in_attr2.x;
    // 0x000228: 0x4C6810100047120B Fmul
    temp_49 = temp_40 * vp_c4.data[1].x;
    // 0x000230: 0x5080000000570D0D Mufu
    temp_50 = inversesqrt(temp_47);
    // 0x000238: 0x4C6810100087120C Fmul
    temp_51 = temp_40 * vp_c4.data[2].x;
    // 0x000248: 0x4C68101000071210 Fmul
    temp_52 = temp_40 * vp_c4.data[0].x;
    // 0x000250: 0x5C5830000087120F Fadd
    temp_53 = 0.0 - temp_0;
    temp_54 = temp_40 + temp_53;
    // 0x000258: 0xEFD87F800A47FF08 Ald
    temp_55 = in_attr2.y;
    // 0x000268: 0x5C58300000771617 Fadd
    temp_56 = 0.0 - temp_1;
    temp_57 = temp_41 + temp_56;
    // 0x000270: 0xEFD87F800987FF12 Ald
    temp_58 = in_attr1.z;
    // 0x000278: 0x4C68101000071513 Fmul
    temp_59 = temp_43 * vp_c4.data[0].x;
    // 0x000288: 0x4C68101000871507 Fmul
    temp_60 = temp_43 * vp_c4.data[2].x;
    // 0x000290: 0x4C68101000471515 Fmul
    temp_61 = temp_43 * vp_c4.data[1].x;
    // 0x000298: 0x49A005900057160B Ffma
    temp_62 = fma(temp_41, vp_c4.data[1].y, temp_49);
    // 0x0002A8: 0x49A0061000971614 Ffma
    temp_63 = fma(temp_41, vp_c4.data[2].y, temp_51);
    // 0x0002B0: 0x49A0081000171616 Ffma
    temp_64 = fma(temp_41, vp_c4.data[0].y, temp_52);
    // 0x0002B8: 0x49A0099000171813 Ffma
    temp_65 = fma(temp_44, vp_c4.data[0].y, temp_59);
    // 0x0002C8: 0x49A0039000971810 Ffma
    temp_66 = fma(temp_44, vp_c4.data[2].y, temp_60);
    // 0x0002D0: 0x49A00A900057180C Ffma
    temp_67 = fma(temp_44, vp_c4.data[1].y, temp_61);
    // 0x0002D8: 0xEFD87F800A87FF15 Ald
    temp_68 = in_attr2.z;
    // 0x0002E8: 0x49A0059000670907 Ffma
    temp_69 = fma(temp_46, vp_c4.data[1].z, temp_62);
    // 0x0002F0: 0x4C6810180CC70D0B Fmul
    temp_70 = temp_50 * vp_c6.data[51].x;
    // 0x0002F8: 0x5C58300000E7090E Fadd
    temp_71 = 0.0 - temp_2;
    temp_72 = temp_46 + temp_71;
    // 0x000308: 0x49A00A1000A70914 Ffma
    temp_73 = fma(temp_46, vp_c4.data[2].z, temp_63);
    // 0x000310: 0x49A00B1000270916 Ffma
    temp_74 = fma(temp_46, vp_c4.data[0].z, temp_64);
    // 0x000318: 0x4C6810180CE70D09 Fmul
    temp_75 = temp_50 * vp_c6.data[51].z;
    // 0x000328: 0x4C58101000770707 Fadd
    temp_76 = temp_69 + vp_c4.data[1].w;
    // 0x000330: 0x49A105980CF70B18 Ffma
    temp_77 = 0.0 - vp_c6.data[51].w;
    temp_78 = fma(temp_70, temp_77, temp_70);
    // 0x000338: 0x4C68101000070A1B Fmul
    temp_79 = temp_48 * vp_c4.data[0].x;
    // 0x000348: 0x4C68101000870A1D Fmul
    temp_80 = temp_48 * vp_c4.data[2].x;
    // 0x000350: 0x4C68101000470A1E Fmul
    temp_81 = temp_48 * vp_c4.data[1].x;
    // 0x000358: 0x5C68100000F70F1A Fmul
    temp_82 = temp_54 * temp_54;
    // 0x000368: 0x4C5810100037160A Fadd
    temp_83 = temp_74 + vp_c4.data[0].w;
    // 0x000370: 0x4C68101409670719 Fmul
    temp_84 = temp_76 * vp_c5.data[37].z;
    // 0x000378: 0x1E23DCCCCCD71818 Fmul32i
    temp_85 = temp_78 * 0.100000001;
    // 0x000388: 0x49A104980CF7090F Ffma
    temp_86 = 0.0 - vp_c6.data[51].w;
    temp_87 = fma(temp_75, temp_86, temp_75);
    // 0x000390: 0x49A00D900017081B Ffma
    temp_88 = fma(temp_55, vp_c4.data[0].y, temp_79);
    // 0x000398: 0x49A00E900097081C Ffma
    temp_89 = fma(temp_55, vp_c4.data[2].y, temp_80);
    // 0x0003A8: 0x49A00F100057081E Ffma
    temp_90 = fma(temp_55, vp_c4.data[1].y, temp_81);
    // 0x0003B0: 0x4C58101000B71408 Fadd
    temp_91 = temp_73 + vp_c4.data[2].w;
    // 0x0003B8: 0x59A10C8001870A19 Ffma
    temp_92 = 0.0 - temp_85;
    temp_93 = fma(temp_83, temp_92, temp_84);
    // 0x0003C8: 0x1E23DCCCCCD70F16 Fmul32i
    temp_94 = temp_87 * 0.100000001;
    // 0x0003D0: 0x49A009900027120F Ffma
    temp_95 = fma(temp_58, vp_c4.data[0].z, temp_65);
    // 0x0003D8: 0x49A00D9000271513 Ffma
    temp_96 = fma(temp_68, vp_c4.data[0].z, temp_88);
    // 0x0003E8: 0x49A0081000A71210 Ffma
    temp_97 = fma(temp_58, vp_c4.data[2].z, temp_66);
    // 0x0003F0: 0x49A0061000671212 Ffma
    temp_98 = fma(temp_58, vp_c4.data[1].z, temp_67);
    // 0x0003F8: 0x49A00E1000A71514 Ffma
    temp_99 = fma(temp_68, vp_c4.data[2].z, temp_89);
    // 0x000408: 0x59A00C8001670816 Ffma
    temp_100 = fma(temp_91, temp_94, temp_93);
    // 0x000410: 0x5C68100000F70F0C Fmul
    temp_101 = temp_95 * temp_95;
    // 0x000418: 0x49A00F1000671515 Ffma
    temp_102 = fma(temp_68, vp_c4.data[1].z, temp_90);
    // 0x000428: 0x5C6810000137131C Fmul
    temp_103 = temp_96 * temp_96;
    // 0x000430: 0x59A00D0001771717 Ffma
    temp_104 = fma(temp_57, temp_57, temp_82);
    // 0x000438: 0x5C58300000570A1B Fadd
    temp_105 = 0.0 - temp_12;
    temp_106 = temp_83 + temp_105;
    // 0x000448: 0x49A00B1C23071111 Ffma
    temp_107 = fma(0.5, vp_c7.data[140].x, temp_100);
    // 0x000450: 0x59A0060001271219 Ffma
    temp_108 = fma(temp_98, temp_98, temp_101);
    // 0x000458: 0xEFD87F8014C7FF0C Ald
    temp_109 = in_attr12.w;
    // 0x000468: 0x5C58300000670818 Fadd
    temp_110 = 0.0 - temp_14;
    temp_111 = temp_91 + temp_110;
    // 0x000470: 0x5C5830000047071A Fadd
    temp_112 = 0.0 - temp_13;
    temp_113 = temp_76 + temp_112;
    // 0x000478: 0x59A00E000157151F Ffma
    temp_114 = fma(temp_102, temp_102, temp_103);
    // 0x000488: 0x5C69100001B7FF1C Fmul
    temp_115 = 0.0 - temp_106;
    temp_116 = 0.0 * temp_115;
    // 0x000490: 0x3868104040071116 Fmul
    temp_117 = temp_107 * 3.0;
    // 0x000498: 0x59A00C8001071019 Ffma
    temp_118 = fma(temp_97, temp_97, temp_108);
    // 0x0004A8: 0x59A10D800187FF1B Ffma
    temp_119 = 0.0 - temp_111;
    temp_120 = fma(0.0, temp_119, temp_106);
    // 0x0004B0: 0x5080000000571919 Mufu
    temp_121 = inversesqrt(temp_118);
    // 0x0004B8: 0x5C9000000117001D Rro
    // 0x0004C8: 0x59A20D000187FF1E Ffma
    temp_122 = 0.0 - temp_113;
    temp_123 = fma(0.0, temp_111, temp_122);
    // 0x0004D0: 0x5080000000071D1D Mufu
    temp_124 = cos(temp_107);
    // 0x0004D8: 0x59A00F8001471421 Ffma
    temp_125 = fma(temp_99, temp_99, temp_114);
    // 0x0004E8: 0x5C90000001670018 Rro
    // 0x0004F0: 0x5080000000572116 Mufu
    temp_126 = inversesqrt(temp_125);
    // 0x0004F8: 0x38681040A007111F Fmul
    temp_127 = temp_107 * 5.0;
    // 0x000508: 0x5080000000071818 Mufu
    temp_128 = cos(temp_117);
    // 0x000510: 0x59A00B8000E70E20 Ffma
    temp_129 = fma(temp_72, temp_72, temp_104);
    // 0x000518: 0x59A00E0001A7FF17 Ffma
    temp_130 = fma(0.0, temp_113, temp_116);
    // 0x000528: 0x4C6810180CD70D0D Fmul
    temp_131 = temp_50 * vp_c6.data[51].y;
    // 0x000530: 0x5C68100000B71E1E Fmul
    temp_132 = temp_123 * temp_70;
    // 0x000538: 0x5C68100001970F0E Fmul
    temp_133 = temp_95 * temp_121;
    // 0x000548: 0x5C90000001F7001A Rro
    // 0x000550: 0x5C6810000197120F Fmul
    temp_134 = temp_98 * temp_121;
    // 0x000558: 0x5080000000872012 Mufu
    temp_135 = sqrt(temp_129);
    // 0x000568: 0x5C68100001971010 Fmul
    temp_136 = temp_97 * temp_121;
    // 0x000570: 0x5080000000071A1A Mufu
    temp_137 = cos(temp_127);
    // 0x000578: 0x5C68100001D71D1D Fmul
    temp_138 = temp_124 * temp_124;
    // 0x000588: 0x59A00F0000D71B1E Ffma
    temp_139 = fma(temp_120, temp_131, temp_132);
    // 0x000590: 0x5C68100001671319 Fmul
    temp_140 = temp_96 * temp_126;
    // 0x000598: 0xEFD87F800AC7FF13 Ald
    temp_141 = in_attr2.w;
    // 0x0005A8: 0x5C68100001671414 Fmul
    temp_142 = temp_99 * temp_126;
    // 0x0005B0: 0x4C68101409570C1C Fmul
    temp_143 = temp_109 * vp_c5.data[37].y;
    // 0x0005B8: 0x5C68100001671515 Fmul
    temp_144 = temp_102 * temp_126;
    // 0x0005C8: 0x5C68100001871D18 Fmul
    temp_145 = temp_138 * temp_128;
    // 0x0005D0: 0x59A00F0000971717 Ffma
    temp_146 = fma(temp_130, temp_75, temp_139);
    // 0x0005D8: 0x4C98079C23070016 Mov
    // 0x0005E8: 0x5C68100001470E1F Fmul
    temp_147 = temp_133 * temp_142;
    // 0x0005F0: 0x4C6810140977111B Fmul
    temp_148 = temp_107 * vp_c5.data[37].w;
    // 0x0005F8: 0x5C68100001970F23 Fmul
    temp_149 = temp_134 * temp_140;
    // 0x000608: 0x5C68120001A7181A Fmul
    temp_150 = temp_145 * 0.5;
    temp_151 = temp_150 * temp_137;
    // 0x000610: 0x32A0053F00070718 Ffma
    temp_152 = fma(temp_76, 0.5, temp_83);
    // 0x000618: 0x4C6810180CF71C11 Fmul
    temp_153 = temp_143 * vp_c6.data[51].w;
    // 0x000628: 0x5C68100001270B1E Fmul
    temp_154 = temp_70 * temp_135;
    // 0x000630: 0xEFD87F801007FF0B Ald
    temp_155 = in_attr8.x;
    // 0x000638: 0x5C68100001571021 Fmul
    temp_156 = temp_136 * temp_144;
    // 0x000648: 0x59A20F800197101C Ffma
    temp_157 = 0.0 - temp_147;
    temp_158 = fma(temp_136, temp_140, temp_157);
    // 0x000650: 0x5C68100001270920 Fmul
    temp_159 = temp_75 * temp_135;
    // 0x000658: 0x5C68100001270D1F Fmul
    temp_160 = temp_131 * temp_135;
    // 0x000668: 0x59A2118001570E09 Ffma
    temp_161 = 0.0 - temp_149;
    temp_162 = fma(temp_133, temp_144, temp_161);
    // 0x000670: 0x49A00C1407571616 Ffma
    temp_163 = fma(vp_c7.data[140].x, vp_c5.data[29].y, temp_152);
    // 0x000678: 0x5C68100001E7110D Fmul
    temp_164 = temp_153 * temp_154;
    // 0x000688: 0x5C5910000067061D Fadd
    temp_165 = 0.0 - temp_14;
    temp_166 = temp_165 + temp_14;
    // 0x000690: 0xEFD87F801047FF06 Ald
    temp_167 = in_attr8.y;
    // 0x000698: 0x59A2108001470F21 Ffma
    temp_168 = 0.0 - temp_156;
    temp_169 = fma(temp_134, temp_142, temp_168);
    // 0x0006A8: 0xEFF07F800987FF14 Ast
    out_attr1.z = temp_142;
    // 0x0006B0: 0x5C68100001370918 Fmul
    temp_170 = temp_162 * temp_141;
    // 0x0006B8: 0xEFF07F800907FF19 Ast
    out_attr1.x = temp_140;
    // 0x0006C8: 0x5C90000001670016 Rro
    // 0x0006D0: 0xEFF07F800947FF15 Ast
    out_attr1.y = temp_144;
    // 0x0006D8: 0x5C68100000D71A09 Fmul
    temp_171 = temp_151 * temp_164;
    // 0x0006E8: 0x508000000007160D Mufu
    temp_172 = cos(temp_163);
    // 0x0006F0: 0x5C90000001B7001B Rro
    // 0x0006F8: 0xEFF07F800A87FF18 Ast
    out_attr2.z = temp_170;
    // 0x000708: 0x5C68100002071120 Fmul
    temp_173 = temp_153 * temp_159;
    // 0x000710: 0x5080000000171B1B Mufu
    temp_174 = sin(temp_148);
    // 0x000718: 0x5C68100001F7111F Fmul
    temp_175 = temp_153 * temp_160;
    // 0x000728: 0x4CB0119002371A15 F2i
    temp_176 = trunc(vp_c4.data[8].w);
    temp_177 = int(temp_176);
    // 0x000730: 0x5C58100001D7081D Fadd
    temp_178 = temp_91 + temp_166;
    // 0x000738: 0xEFF07F800807FF0E Ast
    out_attr0.x = temp_133;
    // 0x000748: 0x5C68100001372121 Fmul
    temp_179 = temp_169 * temp_141;
    // 0x000750: 0xEFF07F800847FF0F Ast
    out_attr0.y = temp_134;
    // 0x000758: 0x5C68100002071A20 Fmul
    temp_180 = temp_151 * temp_173;
    // 0x000768: 0xEFF07F800887FF10 Ast
    out_attr0.z = temp_136;
    // 0x000770: 0x4C68101407670D0D Fmul
    temp_181 = temp_172 * vp_c5.data[29].z;
    // 0x000778: 0xEFF07F800A07FF21 Ast
    out_attr2.x = temp_179;
    // 0x000788: 0x1E23DCCCCCD71B19 Fmul32i
    temp_182 = temp_174 * 0.100000001;
    // 0x000790: 0x59A00E800077FF1D Ffma
    temp_183 = fma(0.0, temp_76, temp_178);
    // 0x000798: 0x5C68100001371C1C Fmul
    temp_184 = temp_158 * temp_141;
    // 0x0007A8: 0x1E23CF5C28F70909 Fmul32i
    temp_185 = temp_171 * 0.0299999993;
    // 0x0007B0: 0xEFF07F800A47FF1C Ast
    out_attr2.y = temp_184;
    // 0x0007B8: 0x59A00C8001A71717 Ffma
    temp_186 = fma(temp_146, temp_151, temp_182);
    // 0x0007C8: 0x59A10E8000A7FF1D Ffma
    temp_187 = 0.0 - temp_83;
    temp_188 = fma(0.0, temp_187, temp_183);
    // 0x0007D0: 0x5C68100001F71A1A Fmul
    temp_189 = temp_151 * temp_175;
    // 0x0007D8: 0x49A00E8400072013 Ffma
    temp_190 = fma(temp_180, vp_c1.data[0].x, temp_188);
    // 0x0007E8: 0x1E23CF5C28F71A1A Fmul32i
    temp_191 = temp_189 * 0.0299999993;
    // 0x0007F0: 0x5C68100000070014 Fmul
    temp_192 = temp_36 * temp_36;
    // 0x0007F8: 0x5C58100000270002 Fadd
    temp_193 = temp_36 + temp_38;
    // 0x000808: 0x5C58100000370103 Fadd
    temp_194 = temp_37 + temp_39;
    // 0x000810: 0x59A00A0000170114 Ffma
    temp_195 = fma(temp_37, temp_37, temp_192);
    // 0x000818: 0x5084000000871414 Mufu
    temp_196 = sqrt(temp_195);
    temp_197 = clamp(temp_196, 0.0, 1.0);
    // 0x000828: 0x5C68100001470D0D Fmul
    temp_198 = temp_181 * temp_197;
    // 0x000830: 0x49A006940747020D Ffma
    temp_199 = fma(temp_193, vp_c5.data[29].x, temp_198);
    // 0x000838: 0x5C68100000C70D00 Fmul
    temp_200 = temp_199 * temp_109;
    // 0x000848: 0x59A0000001171700 Ffma
    temp_201 = fma(temp_186, temp_153, temp_200);
    // 0x000850: 0x3848000000471517 Shl
    temp_202 = temp_177 << 4;
    // 0x000858: 0xEF94007048871718 Ldc
    temp_203 = temp_202 + 0x488;
    temp_204 = uint(temp_203) >> 2;
    temp_205 = temp_204 >> 2;
    temp_206 = int(temp_204) & 3;
    temp_207 = vp_c7.data[int(temp_205)][temp_206];
    // 0x000868: 0x5C9000000007001B Rro
    // 0x000870: 0xEF94007068871719 Ldc
    temp_208 = temp_202 + 0x688;
    temp_209 = uint(temp_208) >> 2;
    temp_210 = temp_209 >> 2;
    temp_211 = int(temp_209) & 3;
    temp_212 = vp_c7.data[int(temp_210)][temp_211];
    // 0x000878: 0x5080000000171B0D Mufu
    temp_213 = sin(temp_201);
    // 0x000888: 0x5080000000071B11 Mufu
    temp_214 = cos(temp_201);
    // 0x000890: 0x5C69100000D70400 Fmul
    temp_215 = 0.0 - temp_213;
    temp_216 = temp_13 * temp_215;
    // 0x000898: 0x5C68100001170414 Fmul
    temp_217 = temp_13 * temp_214;
    // 0x0008A8: 0x59A3000001170500 Ffma
    temp_218 = 0.0 - temp_214;
    temp_219 = 0.0 - temp_216;
    temp_220 = fma(temp_12, temp_218, temp_219);
    // 0x0008B0: 0x59A30A0000D70515 Ffma
    temp_221 = 0.0 - temp_213;
    temp_222 = 0.0 - temp_217;
    temp_223 = fma(temp_12, temp_221, temp_222);
    // 0x0008B8: 0x5C58100000070516 Fadd
    temp_224 = temp_12 + temp_220;
    // 0x0008C8: 0xEF95007068071700 Ldc
    temp_225 = temp_202 + 0x680;
    temp_226 = uint(temp_225) >> 2;
    temp_227 = temp_226 >> 2;
    temp_228 = int(temp_226) & 3;
    temp_229 = vp_c7.data[int(temp_227)][temp_228];
    temp_230 = int(temp_226) + 1;
    temp_231 = uint(temp_230) >> 2;
    temp_232 = temp_230 & 3;
    temp_233 = vp_c7.data[int(temp_231)][temp_232];
    // 0x0008D0: 0x5C58100001570415 Fadd
    temp_234 = temp_13 + temp_223;
    // 0x0008D8: 0x5C68100000C70204 Fmul
    temp_235 = temp_193 * temp_109;
    // 0x0008E8: 0x5C68100000C7030C Fmul
    temp_236 = temp_194 * temp_109;
    // 0x0008F0: 0xEF95007048071702 Ldc
    temp_237 = temp_202 + 0x480;
    temp_238 = uint(temp_237) >> 2;
    temp_239 = temp_238 >> 2;
    temp_240 = int(temp_238) & 3;
    temp_241 = vp_c7.data[int(temp_239)][temp_240];
    temp_242 = int(temp_238) + 1;
    temp_243 = uint(temp_242) >> 2;
    temp_244 = temp_242 & 3;
    temp_245 = vp_c7.data[int(temp_243)][temp_244];
    // 0x0008F8: 0x59A00C8001871305 Ffma
    temp_246 = fma(temp_190, temp_207, temp_212);
    // 0x000908: 0x59A00B000087FF16 Ffma
    temp_247 = fma(0.0, temp_91, temp_224);
    // 0x000910: 0xEFF07F800D87FF05 Ast
    out_attr5.z = temp_246;
    // 0x000918: 0x59A00A800087FF08 Ffma
    temp_248 = fma(0.0, temp_91, temp_234);
    // 0x000928: 0x5C68100001270413 Fmul
    temp_249 = temp_235 * temp_135;
    // 0x000930: 0x5C68100001270C0C Fmul
    temp_250 = temp_236 * temp_135;
    // 0x000938: 0x4C5830180B270512 Fadd
    temp_251 = 0.0 - vp_c6.data[44].z;
    temp_252 = temp_246 + temp_251;
    // 0x000948: 0x59A10B0000D70704 Ffma
    temp_253 = 0.0 - temp_213;
    temp_254 = fma(temp_76, temp_253, temp_247);
    // 0x000950: 0x59A0040001170708 Ffma
    temp_255 = fma(temp_76, temp_214, temp_248);
    // 0x000958: 0x49A0049407771309 Ffma
    temp_256 = fma(temp_249, vp_c5.data[29].w, temp_185);
    // 0x000968: 0x49A00D1407770C1A Ffma
    temp_257 = fma(temp_250, vp_c5.data[29].w, temp_191);
    // 0x000970: 0x4C98079400270007 Mov
    // 0x000978: 0x4C9807940037000C Mov
    // 0x000988: 0x59A0020001170A04 Ffma
    temp_258 = fma(temp_83, temp_214, temp_254);
    // 0x000990: 0x59A0040000D70A08 Ffma
    temp_259 = fma(temp_83, temp_213, temp_255);
    // 0x000998: 0x51A003940047060A Ffma
    temp_260 = fma(temp_167, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x0009A8: 0x51A0061400570606 Ffma
    temp_261 = fma(temp_167, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x0009B0: 0x5C58100000970409 Fadd
    temp_262 = temp_258 + temp_256;
    // 0x0009B8: 0x5C58100001A70804 Fadd
    temp_263 = temp_259 + temp_257;
    // 0x0009C8: 0x49A0051400070B0C Ffma
    temp_264 = fma(temp_155, vp_c5.data[0].x, temp_260);
    // 0x0009D0: 0x49A0031400170B11 Ffma
    temp_265 = fma(temp_155, vp_c5.data[0].y, temp_261);
    // 0x0009D8: 0xEFF07F800E07FF0C Ast
    out_attr6.x = temp_264;
    // 0x0009E8: 0x59A0000000270909 Ffma
    temp_266 = fma(temp_262, temp_241, temp_229);
    // 0x0009F0: 0xEFF07F800E47FF11 Ast
    out_attr6.y = temp_265;
    // 0x0009F8: 0x4C5810180BA70502 Fadd
    temp_267 = temp_246 + vp_c6.data[46].z;
    // 0x000A08: 0xEFF07F800D07FF09 Ast
    out_attr5.x = temp_266;
    // 0x000A10: 0x59A0008000370404 Ffma
    temp_268 = fma(temp_263, temp_245, temp_233);
    // 0x000A18: 0x4C5830180B070906 Fadd
    temp_269 = 0.0 - vp_c6.data[44].x;
    temp_270 = temp_266 + temp_269;
    // 0x000A28: 0xEFF07F800D47FF04 Ast
    out_attr5.y = temp_268;
    // 0x000A30: 0x4C6810180C270201 Fmul
    temp_271 = temp_267 * vp_c6.data[48].z;
    // 0x000A38: 0x4C6810180C670203 Fmul
    temp_272 = temp_267 * vp_c6.data[49].z;
    // 0x000A48: 0x4C5810180B970400 Fadd
    temp_273 = temp_268 + vp_c6.data[46].y;
    // 0x000A50: 0x4C6810180CA70202 Fmul
    temp_274 = temp_267 * vp_c6.data[50].z;
    // 0x000A58: 0x4C5830180B170407 Fadd
    temp_275 = 0.0 - vp_c6.data[44].y;
    temp_276 = temp_268 + temp_275;
    // 0x000A68: 0x4C68101803870606 Fmul
    temp_277 = temp_270 * vp_c6.data[14].x;
    // 0x000A70: 0x4C58300C02F70908 Fadd
    temp_278 = 0.0 - vp_c3.data[11].w;
    temp_279 = temp_266 + temp_278;
    // 0x000A78: 0x4C58300C0377050A Fadd
    temp_280 = 0.0 - vp_c3.data[13].w;
    temp_281 = temp_246 + temp_280;
    // 0x000A88: 0xEFF07F800B07FF08 Ast
    out_attr3.x = temp_279;
    // 0x000A90: 0x49A001180C97000D Ffma
    temp_282 = fma(temp_273, vp_c6.data[50].y, temp_274);
    // 0x000A98: 0xEFF07F800B87FF0A Ast
    out_attr3.z = temp_281;
    // 0x000AA8: 0x4C68100C00070902 Fmul
    temp_283 = temp_266 * vp_c3.data[0].x;
    // 0x000AB0: 0x49A001980C57000C Ffma
    temp_284 = fma(temp_273, vp_c6.data[49].y, temp_272);
    // 0x000AB8: 0x4C68100C00470903 Fmul
    temp_285 = temp_266 * vp_c3.data[1].x;
    // 0x000AC8: 0x49A000980C17000B Ffma
    temp_286 = fma(temp_273, vp_c6.data[48].y, temp_271);
    // 0x000AD0: 0x49A0031803970713 Ffma
    temp_287 = fma(temp_276, vp_c6.data[14].y, temp_277);
    // 0x000AD8: 0x4C58101002070501 Fadd
    temp_288 = temp_246 + vp_c4.data[8].x;
    // 0x000AE8: 0x49A0010C00170402 Ffma
    temp_289 = fma(temp_268, vp_c3.data[0].y, temp_283);
    // 0x000AF0: 0x4C68100C00870907 Fmul
    temp_290 = temp_266 * vp_c3.data[2].x;
    // 0x000AF8: 0x49A0018C00570406 Ffma
    temp_291 = fma(temp_268, vp_c3.data[1].y, temp_285);
    // 0x000B08: 0x4C5810180B87090A Fadd
    temp_292 = temp_266 + vp_c6.data[46].x;
    // 0x000B10: 0x49A0048400170E11 Ffma
    temp_293 = fma(temp_133, vp_c1.data[0].y, temp_266);
    // 0x000B18: 0x49A0020400170F09 Ffma
    temp_294 = fma(temp_134, vp_c1.data[0].y, temp_268);
    // 0x000B28: 0x49A0010C00270508 Ffma
    temp_295 = fma(temp_246, vp_c3.data[0].z, temp_289);
    // 0x000B30: 0x49A0010C00270103 Ffma
    temp_296 = fma(temp_288, vp_c3.data[0].z, temp_289);
    // 0x000B38: 0x49A0038C00970407 Ffma
    temp_297 = fma(temp_268, vp_c3.data[2].y, temp_290);
    // 0x000B48: 0x49A0030C00670102 Ffma
    temp_298 = fma(temp_288, vp_c3.data[1].z, temp_291);
    // 0x000B50: 0x49A0030C00670506 Ffma
    temp_299 = fma(temp_246, vp_c3.data[1].z, temp_291);
    // 0x000B58: 0x49A005980C070A0B Ffma
    temp_300 = fma(temp_292, vp_c6.data[48].x, temp_286);
    // 0x000B68: 0x4C58100C00370808 Fadd
    temp_301 = temp_295 + vp_c3.data[0].w;
    // 0x000B70: 0x49A006180C470A0C Ffma
    temp_302 = fma(temp_292, vp_c6.data[49].x, temp_284);
    // 0x000B78: 0x49A006980C870A0D Ffma
    temp_303 = fma(temp_292, vp_c6.data[50].x, temp_282);
    // 0x000B88: 0x49A0028400171000 Ffma
    temp_304 = fma(temp_136, vp_c1.data[0].y, temp_246);
    // 0x000B90: 0x49A0038C00A70101 Ffma
    temp_305 = fma(temp_288, vp_c3.data[2].z, temp_297);
    // 0x000B98: 0x4C68100C0B47110A Fmul
    temp_306 = temp_293 * vp_c3.data[45].x;
    // 0x000BA8: 0x4C68100C0AC7110E Fmul
    temp_307 = temp_293 * vp_c3.data[43].x;
    // 0x000BB0: 0x4C68100C0B07110F Fmul
    temp_308 = temp_293 * vp_c3.data[44].x;
    // 0x000BB8: 0x49A0038C00A70507 Ffma
    temp_309 = fma(temp_246, vp_c3.data[2].z, temp_297);
    // 0x000BC8: 0x4C68100C0A871110 Fmul
    temp_310 = temp_293 * vp_c3.data[42].x;
    // 0x000BD0: 0x4C58100C00770606 Fadd
    temp_311 = temp_299 + vp_c3.data[1].w;
    // 0x000BD8: 0x4C68101802C70808 Fmul
    temp_312 = temp_301 * vp_c6.data[11].x;
    // 0x000BE8: 0x49A0050C0B57090A Ffma
    temp_313 = fma(temp_294, vp_c3.data[45].y, temp_306);
    // 0x000BF0: 0x49A0070C0AD7090E Ffma
    temp_314 = fma(temp_294, vp_c3.data[43].y, temp_307);
    // 0x000BF8: 0x49A0078C0B17090F Ffma
    temp_315 = fma(temp_294, vp_c3.data[44].y, temp_308);
    // 0x000C08: 0x49A0080C0A970909 Ffma
    temp_316 = fma(temp_294, vp_c3.data[42].y, temp_310);
    // 0x000C10: 0x4C58100C00B70707 Fadd
    temp_317 = temp_309 + vp_c3.data[2].w;
    // 0x000C18: 0x49A0041802D70606 Ffma
    temp_318 = fma(temp_311, vp_c6.data[11].y, temp_312);
    // 0x000C28: 0xEFF07F800C87FF07 Ast
    out_attr4.z = temp_317;
    // 0x000C30: 0x4C58100C00370303 Fadd
    temp_319 = temp_296 + vp_c3.data[0].w;
    // 0x000C38: 0x4C58300C03370405 Fadd
    temp_320 = 0.0 - vp_c3.data[12].w;
    temp_321 = temp_268 + temp_320;
    // 0x000C48: 0x49A0050C0B67000A Ffma
    temp_322 = fma(temp_304, vp_c3.data[45].z, temp_313);
    // 0x000C50: 0xEFF07F800B47FF05 Ast
    out_attr3.y = temp_321;
    // 0x000C58: 0x49A0070C0AE7000E Ffma
    temp_323 = fma(temp_304, vp_c3.data[43].z, temp_314);
    // 0x000C68: 0x49A0078C0B27000F Ffma
    temp_324 = fma(temp_304, vp_c3.data[44].z, temp_315);
    // 0x000C70: 0x49A0048C0AA70009 Ffma
    temp_325 = fma(temp_304, vp_c3.data[42].z, temp_316);
    // 0x000C78: 0x49A0031802E70706 Ffma
    temp_326 = fma(temp_317, vp_c6.data[11].z, temp_318);
    // 0x000C88: 0x4C58100C00770202 Fadd
    temp_327 = temp_298 + vp_c3.data[1].w;
    // 0x000C90: 0x4C68100C02470300 Fmul
    temp_328 = temp_319 * vp_c3.data[9].x;
    // 0x000C98: 0x4C68100C02870304 Fmul
    temp_329 = temp_319 * vp_c3.data[10].x;
    // 0x000CA8: 0x4C68100C02070305 Fmul
    temp_330 = temp_319 * vp_c3.data[8].x;
    // 0x000CB0: 0x4C68100C01C70307 Fmul
    temp_331 = temp_319 * vp_c3.data[7].x;
    // 0x000CB8: 0x4C58100C00B70101 Fadd
    temp_332 = temp_305 + vp_c3.data[2].w;
    // 0x000CC8: 0x49A0099803A71212 Ffma
    temp_333 = fma(temp_252, vp_c6.data[14].z, temp_287);
    // 0x000CD0: 0x49A0000C02570200 Ffma
    temp_334 = fma(temp_327, vp_c3.data[9].y, temp_328);
    // 0x000CD8: 0x49A0020C02970204 Ffma
    temp_335 = fma(temp_327, vp_c3.data[10].y, temp_329);
    // 0x000CE8: 0x49A0028C02170203 Ffma
    temp_336 = fma(temp_327, vp_c3.data[8].y, temp_330);
    // 0x000CF0: 0x49A0038C01D70207 Ffma
    temp_337 = fma(temp_327, vp_c3.data[7].y, temp_331);
    // 0x000CF8: 0x4C98079803C70013 Mov
    // 0x000D08: 0x4C98079803070008 Mov
    // 0x000D10: 0x49A0000C02670100 Ffma
    temp_338 = fma(temp_332, vp_c3.data[9].z, temp_334);
    // 0x000D18: 0x49A0020C02A70104 Ffma
    temp_339 = fma(temp_332, vp_c3.data[10].z, temp_335);
    // 0x000D28: 0x49A0018C02270103 Ffma
    temp_340 = fma(temp_332, vp_c3.data[8].z, temp_336);
    // 0x000D30: 0x49A0038C01E70107 Ffma
    temp_341 = fma(temp_332, vp_c3.data[7].z, temp_337);
    // 0x000D38: 0x4C6810180BB70B0B Fmul
    temp_342 = temp_300 * vp_c6.data[46].w;
    // 0x000D48: 0x4C6810180BB70C0C Fmul
    temp_343 = temp_302 * vp_c6.data[46].w;
    // 0x000D50: 0xEFF07F801207FF0B Ast
    out_attr10.x = temp_342;
    // 0x000D58: 0x4C6810180BB70D0D Fmul
    temp_344 = temp_303 * vp_c6.data[46].w;
    // 0x000D68: 0xEFF07F801247FF0C Ast
    out_attr10.y = temp_343;
    // 0x000D70: 0x51A0099803B71212 Ffma
    temp_345 = fma(temp_333, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000D78: 0xEFF07F801287FF0D Ast
    out_attr10.z = temp_344;
    // 0x000D88: 0x4C58100C0B770A0A Fadd
    temp_346 = temp_322 + vp_c3.data[45].w;
    // 0x000D90: 0xEFF07F801047FF12 Ast
    out_attr8.y = temp_345;
    // 0x000D98: 0x4C58100C0AF70E0E Fadd
    temp_347 = temp_323 + vp_c3.data[43].w;
    // 0x000DA8: 0xEFF07F8011C7FF0A Ast
    out_attr9.w = temp_346;
    // 0x000DB0: 0x4C58100C0B370F0F Fadd
    temp_348 = temp_324 + vp_c3.data[44].w;
    // 0x000DB8: 0xEFF07F801147FF0E Ast
    out_attr9.y = temp_347;
    // 0x000DC8: 0x4C58100C0AB70909 Fadd
    temp_349 = temp_325 + vp_c3.data[42].w;
    // 0x000DD0: 0xEFF07F801187FF0F Ast
    out_attr9.z = temp_348;
    // 0x000DD8: 0x51A0041802F70606 Ffma
    temp_350 = fma(temp_326, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000DE8: 0xEFF07F801107FF09 Ast
    out_attr9.x = temp_349;
    // 0x000DF0: 0x4C58100C02770000 Fadd
    temp_351 = temp_338 + vp_c3.data[9].w;
    // 0x000DF8: 0xEFF07F801007FF06 Ast
    out_attr8.x = temp_350;
    // 0x000E08: 0x4C58100C02B70404 Fadd
    temp_352 = temp_339 + vp_c3.data[10].w;
    // 0x000E10: 0xEFF07F800787FF00 Ast
    gl_Position.z = temp_351;
    // 0x000E18: 0x4C58100C02370303 Fadd
    temp_353 = temp_340 + vp_c3.data[8].w;
    // 0x000E28: 0xEFF07F8007C7FF04 Ast
    gl_Position.w = temp_352;
    // 0x000E30: 0x4C58100C01F70707 Fadd
    temp_354 = temp_341 + vp_c3.data[7].w;
    // 0x000E38: 0xEFF07F800747FF03 Ast
    gl_Position.y = temp_353;
    // 0x000E48: 0xEFF07F800707FF07 Ast
    gl_Position.x = temp_354;
    // 0x000E50: 0xE30000000007000F Exit
    return;
}
